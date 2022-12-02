// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export class WorkflowSimple extends pulumi.CustomResource {
    /**
     * Get an existing WorkflowSimple resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkflowSimpleState, opts?: pulumi.CustomResourceOptions): WorkflowSimple {
        return new WorkflowSimple(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rootly:index/workflowSimple:WorkflowSimple';

    /**
     * Returns true if the given object is an instance of WorkflowSimple.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkflowSimple {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkflowSimple.__pulumiType;
    }

    /**
     * Workflow command.
     */
    public readonly command!: pulumi.Output<string>;
    /**
     * The description of the workflow
     */
    public readonly description!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly environmentIds!: pulumi.Output<string[]>;
    public readonly groupIds!: pulumi.Output<string[]>;
    public readonly incidentTypeIds!: pulumi.Output<string[]>;
    /**
     * The title of the workflow
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The order which the workflow should run with other workflows.
     */
    public readonly position!: pulumi.Output<number>;
    /**
     * Repeat workflow every duration.
     */
    public readonly repeatEveryDuration!: pulumi.Output<string>;
    public readonly repeatOns!: pulumi.Output<string[]>;
    public readonly serviceIds!: pulumi.Output<string[]>;
    public readonly severityIds!: pulumi.Output<string[]>;
    /**
     * The slug of the workflow
     */
    public readonly slug!: pulumi.Output<string>;
    public readonly triggerParams!: pulumi.Output<outputs.WorkflowSimpleTriggerParams>;
    /**
     * Wait this duration before executing.
     */
    public readonly wait!: pulumi.Output<string>;
    /**
     * The group this workflow belongs to.
     */
    public readonly workflowGroupId!: pulumi.Output<string>;

    /**
     * Create a WorkflowSimple resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WorkflowSimpleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkflowSimpleArgs | WorkflowSimpleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkflowSimpleState | undefined;
            resourceInputs["command"] = state ? state.command : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["environmentIds"] = state ? state.environmentIds : undefined;
            resourceInputs["groupIds"] = state ? state.groupIds : undefined;
            resourceInputs["incidentTypeIds"] = state ? state.incidentTypeIds : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["position"] = state ? state.position : undefined;
            resourceInputs["repeatEveryDuration"] = state ? state.repeatEveryDuration : undefined;
            resourceInputs["repeatOns"] = state ? state.repeatOns : undefined;
            resourceInputs["serviceIds"] = state ? state.serviceIds : undefined;
            resourceInputs["severityIds"] = state ? state.severityIds : undefined;
            resourceInputs["slug"] = state ? state.slug : undefined;
            resourceInputs["triggerParams"] = state ? state.triggerParams : undefined;
            resourceInputs["wait"] = state ? state.wait : undefined;
            resourceInputs["workflowGroupId"] = state ? state.workflowGroupId : undefined;
        } else {
            const args = argsOrState as WorkflowSimpleArgs | undefined;
            resourceInputs["command"] = args ? args.command : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["environmentIds"] = args ? args.environmentIds : undefined;
            resourceInputs["groupIds"] = args ? args.groupIds : undefined;
            resourceInputs["incidentTypeIds"] = args ? args.incidentTypeIds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["position"] = args ? args.position : undefined;
            resourceInputs["repeatEveryDuration"] = args ? args.repeatEveryDuration : undefined;
            resourceInputs["repeatOns"] = args ? args.repeatOns : undefined;
            resourceInputs["serviceIds"] = args ? args.serviceIds : undefined;
            resourceInputs["severityIds"] = args ? args.severityIds : undefined;
            resourceInputs["slug"] = args ? args.slug : undefined;
            resourceInputs["triggerParams"] = args ? args.triggerParams : undefined;
            resourceInputs["wait"] = args ? args.wait : undefined;
            resourceInputs["workflowGroupId"] = args ? args.workflowGroupId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkflowSimple.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering WorkflowSimple resources.
 */
export interface WorkflowSimpleState {
    /**
     * Workflow command.
     */
    command?: pulumi.Input<string>;
    /**
     * The description of the workflow
     */
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    environmentIds?: pulumi.Input<pulumi.Input<string>[]>;
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    incidentTypeIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The title of the workflow
     */
    name?: pulumi.Input<string>;
    /**
     * The order which the workflow should run with other workflows.
     */
    position?: pulumi.Input<number>;
    /**
     * Repeat workflow every duration.
     */
    repeatEveryDuration?: pulumi.Input<string>;
    repeatOns?: pulumi.Input<pulumi.Input<string>[]>;
    serviceIds?: pulumi.Input<pulumi.Input<string>[]>;
    severityIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The slug of the workflow
     */
    slug?: pulumi.Input<string>;
    triggerParams?: pulumi.Input<inputs.WorkflowSimpleTriggerParams>;
    /**
     * Wait this duration before executing.
     */
    wait?: pulumi.Input<string>;
    /**
     * The group this workflow belongs to.
     */
    workflowGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WorkflowSimple resource.
 */
export interface WorkflowSimpleArgs {
    /**
     * Workflow command.
     */
    command?: pulumi.Input<string>;
    /**
     * The description of the workflow
     */
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    environmentIds?: pulumi.Input<pulumi.Input<string>[]>;
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    incidentTypeIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The title of the workflow
     */
    name?: pulumi.Input<string>;
    /**
     * The order which the workflow should run with other workflows.
     */
    position?: pulumi.Input<number>;
    /**
     * Repeat workflow every duration.
     */
    repeatEveryDuration?: pulumi.Input<string>;
    repeatOns?: pulumi.Input<pulumi.Input<string>[]>;
    serviceIds?: pulumi.Input<pulumi.Input<string>[]>;
    severityIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The slug of the workflow
     */
    slug?: pulumi.Input<string>;
    triggerParams?: pulumi.Input<inputs.WorkflowSimpleTriggerParams>;
    /**
     * Wait this duration before executing.
     */
    wait?: pulumi.Input<string>;
    /**
     * The group this workflow belongs to.
     */
    workflowGroupId?: pulumi.Input<string>;
}
