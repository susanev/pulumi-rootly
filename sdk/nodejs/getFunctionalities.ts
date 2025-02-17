// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export function getFunctionalities(args?: GetFunctionalitiesArgs, opts?: pulumi.InvokeOptions): Promise<GetFunctionalitiesResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("rootly:index/getFunctionalities:getFunctionalities", {
        "name": args.name,
        "opsgenieId": args.opsgenieId,
        "pagerdutyId": args.pagerdutyId,
        "slug": args.slug,
    }, opts);
}

/**
 * A collection of arguments for invoking getFunctionalities.
 */
export interface GetFunctionalitiesArgs {
    name?: string;
    opsgenieId?: string;
    pagerdutyId?: string;
    slug?: string;
}

/**
 * A collection of values returned by getFunctionalities.
 */
export interface GetFunctionalitiesResult {
    readonly functionalities: outputs.GetFunctionalitiesFunctionality[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name?: string;
    readonly opsgenieId?: string;
    readonly pagerdutyId?: string;
    readonly slug?: string;
}

export function getFunctionalitiesOutput(args?: GetFunctionalitiesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFunctionalitiesResult> {
    return pulumi.output(args).apply(a => getFunctionalities(a, opts))
}

/**
 * A collection of arguments for invoking getFunctionalities.
 */
export interface GetFunctionalitiesOutputArgs {
    name?: pulumi.Input<string>;
    opsgenieId?: pulumi.Input<string>;
    pagerdutyId?: pulumi.Input<string>;
    slug?: pulumi.Input<string>;
}
