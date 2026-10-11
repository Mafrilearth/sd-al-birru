"use server";

import { ActionResponse } from "@/types/action";
import * as attendanceService from "./service";

export async function initializeAttendanceSessionAction(payload: any): Promise<ActionResponse<any>> {
    return {
        is_success: true,
        status_code: 200,
        response_payload: {},
        error_descriptor: null
    };
}

export async function submitAttendanceRegisterAction(payload: any): Promise<ActionResponse<any>> {
    return {
        is_success: true,
        status_code: 200,
        response_payload: {},
        error_descriptor: null
    };
}
