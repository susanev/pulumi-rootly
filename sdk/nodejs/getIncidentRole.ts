// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIncidentRole(args?: GetIncidentRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetIncidentRoleResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("rootly:index/getIncidentRole:getIncidentRole", {
        "createdAt": args.createdAt,
        "name": args.name,
        "slug": args.slug,
    }, opts);
}

/**
 * A collection of arguments for invoking getIncidentRole.
 */
export interface GetIncidentRoleArgs {
    createdAt?: {[key: string]: any};
    name?: string;
    slug?: string;
}

/**
 * A collection of values returned by getIncidentRole.
 */
export interface GetIncidentRoleResult {
    readonly createdAt?: {[key: string]: any};
    readonly id: string;
    readonly name: string;
    readonly slug: string;
}

export function getIncidentRoleOutput(args?: GetIncidentRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIncidentRoleResult> {
    return pulumi.output(args).apply(a => getIncidentRole(a, opts))
}

/**
 * A collection of arguments for invoking getIncidentRole.
 */
export interface GetIncidentRoleOutputArgs {
    createdAt?: pulumi.Input<{[key: string]: any}>;
    name?: pulumi.Input<string>;
    slug?: pulumi.Input<string>;
}
