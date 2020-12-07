import { IEmployeeModel } from "../interfaces";

export const employeesService = {
  async getData(): Promise<IEmployeeModel[]> {
    try {
      const data = await (
        await fetch(
          "https://yalantis-react-school-api.yalantis.com/api/task0/users"
        )
      ).json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};
