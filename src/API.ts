/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  owner: string,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  owner?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  content: string,
  publishedAt?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  publishedAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  content: string,
  publishedAt?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  publishedAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  publishedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type AddMutationVariables = {
  number1?: number | null,
  number2?: number | null,
};

export type AddMutation = {
  add?: number | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    publishedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    publishedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    publishedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type EchoQueryVariables = {
  msg?: string | null,
};

export type EchoQuery = {
  echo?: string | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    publishedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      publishedAt?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCrateByOwnernameSubscriptionVariables = {
  owner: string,
};

export type OnCrateByOwnernameSubscription = {
  onCrateByOwnername?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    publishedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    publishedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    publishedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
