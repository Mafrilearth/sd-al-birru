"use server";

import { ActionResponse } from "@/types/action";
import * as guardianService from "./service";

export async function queryDependentOverviewAction(): Promise<ActionResponse<any>> {
    return {
        is_success: true,
        status_code: 200,
        response_payload: {},
        error_descriptor: null
    };
}
