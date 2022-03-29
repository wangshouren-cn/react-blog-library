interface TagBoxProps extends HTMLAttributes {
  value?: string[];
  showAdd?: boolean;
  onChange?: (value: any) => any;

  /**
   * @description: 如果用户传入了这个参数，会覆盖默认的添加行为
   * @param {*currentTags}
   * @param {*addTag}调用这个函数会添加tag
   * @return {*}
   */
  onClickAdd?: (
    currentTags: string[],
    addTag: (...tags: string[]) => any
  ) => any;

  /**
   * @description: 传入这个参数则表示能被选中
   */
  onActiveChange?: (
    activeTags: string[],
    changeTag: string,
    toActive: boolean
  ) => any;

  canDelete?: boolean;

  /**
   * @description: 在选中状态改变之前时候调用这个函数，该函数的返回值作为新的选中状态值,同样，传入这个参数则代表则表示能被选中
   */
  beforeActiveChange?: (
    lastActiveTags: string[],
    changeTag: string,
    toActive: boolean
  ) => string[];

  /**
   * @description: 默认选中的标签
   */  
  defaultActiveState?: string[]

  /**
   * @description: 默认标签
   */  
   defaultValue?: string[]
  
/**
 * @description: 是否只能选中一个，默认false
 */
  single?: boolean
  
  /**
   * @description: 是否添加的一项原来没有
   * @param {*}
   * @return {*}
   */  
  difference?:boolean
}
