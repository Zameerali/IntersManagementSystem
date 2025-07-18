import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Task,NewTask } from "./type";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    getTasksByIntern: builder.query<Task[], { internId: number }>({
      query: ({ internId }) => `/interns/${internId}/tasks`,
      providesTags: ["tasks"],
    }),

    createTask: builder.mutation<
      Task, 
      {
        task: NewTask;
        internId: number;
      }
    >({
      query: ({ task, internId }) => ({
        url: `/interns/${internId}/tasks`,
        method: "POST",
        body: { ...task },
      }),
      invalidatesTags: ["tasks"],
    }),

    updateTaskStatus: builder.mutation<Task, { id: number; status: string }>({
      query: ({ id, status }) => ({
        url: `/tasks/status`,
        method: "PUT",
        body: { id, status },
      }),
      invalidatesTags: ["tasks"],
    }),
    getAllTasksWithInterns: builder.query<Task[], void>({
      query: () => "/tasks/full",
      providesTags: ["tasks"],
    }),
    getTasksByProject: builder.query<Task[], { projectId: number }>({
      query: ({ projectId }) => `/projects/${projectId}/tasks`,
      providesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTasksByInternQuery,
  useCreateTaskMutation,
  useUpdateTaskStatusMutation,
  useGetAllTasksWithInternsQuery,
  useGetTasksByProjectQuery,
} = tasksApi;
