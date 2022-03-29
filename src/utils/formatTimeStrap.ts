import dayjs from "dayjs";

export default (timeStrap: number) => {
  return dayjs(timeStrap).format("YYYY-MM-DD HH:mm:ss");
};
