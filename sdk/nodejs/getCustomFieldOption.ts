// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * DEPRECATED: Please use `formField` and `formFieldOption` data sources instead.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as rootly from "@pulumi/rootly";
 *
 * const my_custom_field_option = pulumi.output(rootly.getCustomFieldOption({
 *     slug: "my-custom-field-option",
 * }));
 * ```
 */
export function getCustomFieldOption(args?: GetCustomFieldOptionArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomFieldOptionResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("rootly:index/getCustomFieldOption:getCustomFieldOption", {
        "color": args.color,
        "value": args.value,
    }, opts);
}

/**
 * A collection of arguments for invoking getCustomFieldOption.
 */
export interface GetCustomFieldOptionArgs {
    color?: string;
    value?: string;
}

/**
 * A collection of values returned by getCustomFieldOption.
 */
export interface GetCustomFieldOptionResult {
    readonly color: string;
    readonly id: string;
    readonly value: string;
}

export function getCustomFieldOptionOutput(args?: GetCustomFieldOptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomFieldOptionResult> {
    return pulumi.output(args).apply(a => getCustomFieldOption(a, opts))
}

/**
 * A collection of arguments for invoking getCustomFieldOption.
 */
export interface GetCustomFieldOptionOutputArgs {
    color?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}
