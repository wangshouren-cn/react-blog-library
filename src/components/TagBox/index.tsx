import React, {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../Button";
import Input from "../Input";
import Message from "../Message";
import Tag from "../Tag";
import styles from "./index.module.less";

const TagBox: React.FC<TagBoxProps> = ({
  value,
  onChange,
  showAdd = false,
  className = "",
  onClickAdd,
  onActiveChange,
  canDelete,
  beforeActiveChange,
  defaultActiveState = [],
  single = false,
  defaultValue = [],
  difference = false,
  ...props
}) => {

  let [state, setState] = useState<string[]>(defaultValue);

  useEffect(() => {
    if (value) setState(value);
  }, [value]);

  const [activeState, setActiveState] = useState<string[]>([
    ...defaultActiveState,
  ]);

  const [text, setText] = useState<string>("");

  const [isInput, setIsInput] = useState<boolean>(false);

  const addTag = useCallback(
    (...tags: string[]) => {
      const newState = state.concat(tags);

      setState(newState);

      return newState;
    },
    [state]
  );


  const onAdd = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClickAdd) onClickAdd(state, addTag);
      else setIsInput(true);
    },
    [state, addTag]
  );

  const confirm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsInput(false);

    if (difference && state.includes(text)) {
      setText("");
      return Message.error("这个名称已经存在了");
    }

    if (!text) return;

    const newState = addTag(text);
    setText("");

    onChange && onChange(newState);
  };

  const onInputChange = useCallback((v) => {
    setText(v);
  }, []);

  const handleActiveChange = useCallback(
    (tag: string, toActive: boolean, index: number) => {
      if (!onActiveChange && !beforeActiveChange) return;

      let newActiveState: string[];

      if (beforeActiveChange) {
        newActiveState = beforeActiveChange(activeState, tag, toActive);
      } else {
        if (single) {
          if (toActive) {
            newActiveState = [tag];
          } else {
            newActiveState = [];
          }
        } else if (toActive) {
          activeState.push(tag);
          newActiveState = activeState;
        } else {
          newActiveState = activeState.filter((t) => t != tag);
        }
      }

      setActiveState(newActiveState);

      onActiveChange && onActiveChange(newActiveState, tag, toActive);
    },
    [activeState, onActiveChange, setActiveState, beforeActiveChange]
  );

  const handleDelete = useCallback(
    (index) => {
      state.splice(index, 1);

      setState(state);

      onChange && onChange(state);
    },
    [state, onChange, setState]
  );

  return (
    <div className={styles["tag-box"] + " " + className} {...props}>
      {Array.isArray(state)
        ? state.map((str, index) => (
            <span style={{ display: "flex" }} key={index}>
              <Tag
                active={activeState.includes(str) || false}
                onActiveChange={
                  (onActiveChange || beforeActiveChange) &&
                  ((active: boolean) => handleActiveChange(str, active, index))
                }
                value={str}
              />
              {canDelete ? (
                <span
                  onClick={() => handleDelete(index)}
                  className={styles["delete"]}
                >
                  ×
                </span>
              ) : null}
            </span>
          ))
        : null}
      {showAdd ? (
        isInput ? (
          <>
            <Input value={text} onChange={onInputChange} />
            <Button onClick={confirm}>确定</Button>
          </>
        ) : (
          <Button onClick={onAdd}>添加</Button>
        )
      ) : null}
    </div>
  );
};
export default TagBox;
