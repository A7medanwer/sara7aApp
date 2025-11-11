// this collect all methods like "findOne" and "find" and "create" to prevent DB from working on erorr 
export const findOne = async ({
  model,
  filter = {},
  select = "",
  populate = [],
} = {}) => {
  return model.findOne(filter).select(select).populate(populate);
};
export const find = async ({
  model,
  filter = {},
  select = "",
  populate = [],
} = {}) => {
  return model.find(filter).select(select).populate(populate);
};
export const findById = async ({
  model,
  id = {},
  select = "",
  populate = [],
} = {}) => {
  return model.findById(id).select(select).populate(populate);
};
export const create = async ({
  model,
  data = [{}],
  option = { validateBeforeSave: true },
} = {}) => {
  return model.create(data, option);
};
export const updateOne = async ({
  model,
  filter = {},
  data = {},
  option = { runValidators: true },
} = {}) => {
  return model.updateOne(filter, data, option);
};
