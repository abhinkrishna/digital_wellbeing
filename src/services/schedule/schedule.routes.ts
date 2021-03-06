import { NextFunction, Request, Response } from "express";
import Method from "../../types/method";
import Route from "../../types/route";
import RestrictionController from "../restriction/restriction.controller";
import ScheduleController from "./schedule.controller";
import { CreateScheduleDTO, UpdateScheduleDTO } from "./schedule.dto";

const scheduleRoutes: Route[] = [
    {
        path: '/schedules',
        method: Method.post,
        validator: CreateScheduleDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ScheduleController(req, res, next).create();
        }
    },
    {
        path: '/schedules/:id',
        method: Method.patch,
        validator: UpdateScheduleDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ScheduleController(req, res, next).update();
        }
    },
    {
        path: '/schedules',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ScheduleController(req, res, next).readMany();
        }
    },
    {
        path: '/schedules/users/:uid',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ScheduleController(req, res, next).readManyForUser();
        }
    },
    {
        path: '/schedules/:sid/restrictions',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new RestrictionController(req, res, next).readManyOfSchedule();
        }
    },
    {
        path: '/schedules/:id',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ScheduleController(req, res, next).readOne();
        }
    },
    {
        path: '/schedules/:id',
        method: Method.delete,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ScheduleController(req, res, next).delete();
        }
    },
];

export default scheduleRoutes