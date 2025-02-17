// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as rootly from "@pulumi/rootly";
 *
 * const sev0 = new rootly.Severity("sev0", {
 *     color: "#FF0000",
 *     notifyEmails: [
 *         "foo@acme.com",
 *         "bar@acme.com",
 *     ],
 *     slackAliases: [{
 *         id: "S0614TZR7",
 *         name: "Alias 1", // Any string really
 *     }],
 *     slackChannels: [
 *         {
 *             id: "C06A4RZR9",
 *             name: "Channel 1", // Any string really
 *         },
 *         {
 *             id: "C02T4RYR2",
 *             name: "Channel 2", // Any string really
 *         },
 *     ],
 * });
 * const sev1 = new rootly.Severity("sev1", {
 *     color: "#FFA500",
 *     notifyEmails: [
 *         "foo@acme.com",
 *         "bar@acme.com",
 *     ],
 *     slackAliases: [{
 *         id: "S0614TZR7",
 *         name: "Alias 1", // Any string really
 *     }],
 *     slackChannels: [
 *         {
 *             id: "C06A4RZR9",
 *             name: "Channel 1", // Any string really
 *         },
 *         {
 *             id: "C02T4RYR2",
 *             name: "Channel 2", // Any string really
 *         },
 *     ],
 * });
 * const sev2 = new rootly.Severity("sev2", {
 *     color: "#FFA500",
 *     notifyEmails: [
 *         "foo@acme.com",
 *         "bar@acme.com",
 *     ],
 *     slackAliases: [{
 *         id: "S0614TZR7",
 *         name: "Alias 1", // Any string really
 *     }],
 *     slackChannels: [
 *         {
 *             id: "C06A4RZR9",
 *             name: "Channel 1", // Any string really
 *         },
 *         {
 *             id: "C02T4RYR2",
 *             name: "Channel 2", // Any string really
 *         },
 *     ],
 * });
 * ```
 */
export class Severity extends pulumi.CustomResource {
    /**
     * Get an existing Severity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SeverityState, opts?: pulumi.CustomResourceOptions): Severity {
        return new Severity(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rootly:index/severity:Severity';

    /**
     * Returns true if the given object is an instance of Severity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Severity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Severity.__pulumiType;
    }

    public readonly color!: pulumi.Output<string>;
    /**
     * The description of the severity
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The name of the severity
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Emails to attach to the severity
     */
    public readonly notifyEmails!: pulumi.Output<string[]>;
    /**
     * Position of the severity
     */
    public readonly position!: pulumi.Output<number>;
    /**
     * The severity of the severity. Value must be one of `critical`, `high`, `medium`, `low`.
     */
    public readonly severity!: pulumi.Output<string | undefined>;
    /**
     * Slack Aliases associated with this severity
     */
    public readonly slackAliases!: pulumi.Output<outputs.SeveritySlackAlias[]>;
    /**
     * Slack Channels associated with this severity
     */
    public readonly slackChannels!: pulumi.Output<outputs.SeveritySlackChannel[]>;
    /**
     * The slug of the severity
     */
    public readonly slug!: pulumi.Output<string>;

    /**
     * Create a Severity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SeverityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SeverityArgs | SeverityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SeverityState | undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifyEmails"] = state ? state.notifyEmails : undefined;
            resourceInputs["position"] = state ? state.position : undefined;
            resourceInputs["severity"] = state ? state.severity : undefined;
            resourceInputs["slackAliases"] = state ? state.slackAliases : undefined;
            resourceInputs["slackChannels"] = state ? state.slackChannels : undefined;
            resourceInputs["slug"] = state ? state.slug : undefined;
        } else {
            const args = argsOrState as SeverityArgs | undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifyEmails"] = args ? args.notifyEmails : undefined;
            resourceInputs["position"] = args ? args.position : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["slackAliases"] = args ? args.slackAliases : undefined;
            resourceInputs["slackChannels"] = args ? args.slackChannels : undefined;
            resourceInputs["slug"] = args ? args.slug : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Severity.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Severity resources.
 */
export interface SeverityState {
    color?: pulumi.Input<string>;
    /**
     * The description of the severity
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the severity
     */
    name?: pulumi.Input<string>;
    /**
     * Emails to attach to the severity
     */
    notifyEmails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Position of the severity
     */
    position?: pulumi.Input<number>;
    /**
     * The severity of the severity. Value must be one of `critical`, `high`, `medium`, `low`.
     */
    severity?: pulumi.Input<string>;
    /**
     * Slack Aliases associated with this severity
     */
    slackAliases?: pulumi.Input<pulumi.Input<inputs.SeveritySlackAlias>[]>;
    /**
     * Slack Channels associated with this severity
     */
    slackChannels?: pulumi.Input<pulumi.Input<inputs.SeveritySlackChannel>[]>;
    /**
     * The slug of the severity
     */
    slug?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Severity resource.
 */
export interface SeverityArgs {
    color?: pulumi.Input<string>;
    /**
     * The description of the severity
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the severity
     */
    name?: pulumi.Input<string>;
    /**
     * Emails to attach to the severity
     */
    notifyEmails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Position of the severity
     */
    position?: pulumi.Input<number>;
    /**
     * The severity of the severity. Value must be one of `critical`, `high`, `medium`, `low`.
     */
    severity?: pulumi.Input<string>;
    /**
     * Slack Aliases associated with this severity
     */
    slackAliases?: pulumi.Input<pulumi.Input<inputs.SeveritySlackAlias>[]>;
    /**
     * Slack Channels associated with this severity
     */
    slackChannels?: pulumi.Input<pulumi.Input<inputs.SeveritySlackChannel>[]>;
    /**
     * The slug of the severity
     */
    slug?: pulumi.Input<string>;
}
