function createReplaceVariable(variableName) {
  if (process.env.NODE_ENV === "production") {
    return variableName;
  } else {
    return process.env[variableName];
  }
}

export const API_KEYS = {
  API_URL: createReplaceVariable("REACT_APP_LOCAL_API_URL"),
};
