
interface IFormMode {
  type: "EDIT-INFO" | "EDIT-PASSWORD" | "CREATE-INFO" | "NONE";
  isActive: boolean;
}