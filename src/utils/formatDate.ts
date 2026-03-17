import { format } from 'date-fns';
import type { TaskModel } from '../models/TaskModels';

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  return format(date, 'dd/MM/yyyy HH:mm');
}
export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
