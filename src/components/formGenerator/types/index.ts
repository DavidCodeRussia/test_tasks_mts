export interface IEditor {
  getValue: () => string;
}

export interface ISubmitProps {
  formData?: Record<string, any>;
}