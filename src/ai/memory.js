let memory = {};

export const remember = (key, value) => {
  memory[key] = value;
};

export const recall = (key) => {
  return memory[key] || null;
};

export const showMemory = () => {
  return memory;
};