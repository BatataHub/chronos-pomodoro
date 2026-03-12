import { createContext, useContext, useState } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModels';
import { initialTaskState } from './initialTaskState';

export function useTaskContext() {
  return useContext(TaskContext);
}
