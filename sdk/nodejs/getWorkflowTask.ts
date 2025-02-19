// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as rootly from "@pulumi/rootly";
 *
 * const my_workflow_task = pulumi.output(rootly.getWorkflowTask({
 *     slug: "my-workflow-task",
 * }));
 * ```
 */
export function getWorkflowTask(args: GetWorkflowTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowTaskResult> {
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("rootly:index/getWorkflowTask:getWorkflowTask", {
        "name": args.name,
        "slug": args.slug,
        "workflowId": args.workflowId,
    }, opts);
}

/**
 * A collection of arguments for invoking getWorkflowTask.
 */
export interface GetWorkflowTaskArgs {
    name?: string;
    slug?: string;
    workflowId: string;
}

/**
 * A collection of values returned by getWorkflowTask.
 */
export interface GetWorkflowTaskResult {
    readonly id: string;
    readonly name: string;
    readonly slug: string;
    readonly workflowId: string;
}

export function getWorkflowTaskOutput(args: GetWorkflowTaskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkflowTaskResult> {
    return pulumi.output(args).apply(a => getWorkflowTask(a, opts))
}

/**
 * A collection of arguments for invoking getWorkflowTask.
 */
export interface GetWorkflowTaskOutputArgs {
    name?: pulumi.Input<string>;
    slug?: pulumi.Input<string>;
    workflowId: pulumi.Input<string>;
}
