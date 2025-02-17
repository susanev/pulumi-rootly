// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export class IncidentType extends pulumi.CustomResource {
    /**
     * Get an existing IncidentType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IncidentTypeState, opts?: pulumi.CustomResourceOptions): IncidentType {
        return new IncidentType(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rootly:index/incidentType:IncidentType';

    /**
     * Returns true if the given object is an instance of IncidentType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IncidentType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IncidentType.__pulumiType;
    }

    public readonly color!: pulumi.Output<string>;
    /**
     * The description of the incident type
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The name of the incident type
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Emails to attach to the incident type
     */
    public readonly notifyEmails!: pulumi.Output<string[]>;
    /**
     * Position of the incident type
     */
    public readonly position!: pulumi.Output<number>;
    /**
     * Slack Aliases associated with this incident type
     */
    public readonly slackAliases!: pulumi.Output<outputs.IncidentTypeSlackAlias[]>;
    /**
     * Slack Channels associated with this incident type
     */
    public readonly slackChannels!: pulumi.Output<outputs.IncidentTypeSlackChannel[]>;
    /**
     * The slug of the incident type
     */
    public readonly slug!: pulumi.Output<string>;

    /**
     * Create a IncidentType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IncidentTypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IncidentTypeArgs | IncidentTypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IncidentTypeState | undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifyEmails"] = state ? state.notifyEmails : undefined;
            resourceInputs["position"] = state ? state.position : undefined;
            resourceInputs["slackAliases"] = state ? state.slackAliases : undefined;
            resourceInputs["slackChannels"] = state ? state.slackChannels : undefined;
            resourceInputs["slug"] = state ? state.slug : undefined;
        } else {
            const args = argsOrState as IncidentTypeArgs | undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifyEmails"] = args ? args.notifyEmails : undefined;
            resourceInputs["position"] = args ? args.position : undefined;
            resourceInputs["slackAliases"] = args ? args.slackAliases : undefined;
            resourceInputs["slackChannels"] = args ? args.slackChannels : undefined;
            resourceInputs["slug"] = args ? args.slug : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IncidentType.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IncidentType resources.
 */
export interface IncidentTypeState {
    color?: pulumi.Input<string>;
    /**
     * The description of the incident type
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the incident type
     */
    name?: pulumi.Input<string>;
    /**
     * Emails to attach to the incident type
     */
    notifyEmails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Position of the incident type
     */
    position?: pulumi.Input<number>;
    /**
     * Slack Aliases associated with this incident type
     */
    slackAliases?: pulumi.Input<pulumi.Input<inputs.IncidentTypeSlackAlias>[]>;
    /**
     * Slack Channels associated with this incident type
     */
    slackChannels?: pulumi.Input<pulumi.Input<inputs.IncidentTypeSlackChannel>[]>;
    /**
     * The slug of the incident type
     */
    slug?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IncidentType resource.
 */
export interface IncidentTypeArgs {
    color?: pulumi.Input<string>;
    /**
     * The description of the incident type
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the incident type
     */
    name?: pulumi.Input<string>;
    /**
     * Emails to attach to the incident type
     */
    notifyEmails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Position of the incident type
     */
    position?: pulumi.Input<number>;
    /**
     * Slack Aliases associated with this incident type
     */
    slackAliases?: pulumi.Input<pulumi.Input<inputs.IncidentTypeSlackAlias>[]>;
    /**
     * Slack Channels associated with this incident type
     */
    slackChannels?: pulumi.Input<pulumi.Input<inputs.IncidentTypeSlackChannel>[]>;
    /**
     * The slug of the incident type
     */
    slug?: pulumi.Input<string>;
}
