"use server";

import { ActionResponse } from "@/types/action";
import * as gradingService from "./service";

export async function configureAssessmentWeightsAction(payload: any): Promise<ActionResponse<any>> {
    return {
        is_success: true,
        status_code: 200,
        response_payload: {},
        error_descriptor: null
    };
}

export async function recordStudentGradeAction(payload: any): Promise<ActionResponse<any>> {
    return {
        is_success: true,
        status_code: 200,
        response_payload: {},
        error_descriptor: null
    };
}

export async function publishTermReportCardAction(payload: any): Promise<ActionResponse<any>> {
    return {
        is_success: true,
        status_code: 200,
        response_payload: {},
        error_descriptor: null
    };
}
