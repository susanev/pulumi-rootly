// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WorkflowGroup extends pulumi.CustomResource {
    /**
     * Get an existing WorkflowGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkflowGroupState, opts?: pulumi.CustomResourceOptions): WorkflowGroup {
        return new WorkflowGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rootly:index/workflowGroup:WorkflowGroup';

    /**
     * Returns true if the given object is an instance of WorkflowGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkflowGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkflowGroup.__pulumiType;
    }

    /**
     * Whether the group is expanded or collapsed.
     */
    public readonly expanded!: pulumi.Output<boolean>;
    /**
     * The kind of the workflow group.. Value must be one of `simple`, `incident`, `post_mortem`, `action_item`, `pulse`,
     * `alert`.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The name of the workflow group.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The position of the workflow group
     */
    public readonly position!: pulumi.Output<number>;

    /**
     * Create a WorkflowGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WorkflowGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkflowGroupArgs | WorkflowGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkflowGroupState | undefined;
            resourceInputs["expanded"] = state ? state.expanded : undefined;
            resourceInputs["kind"] = state ? state.kind : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["position"] = state ? state.position : undefined;
        } else {
            const args = argsOrState as WorkflowGroupArgs | undefined;
            resourceInputs["expanded"] = args ? args.expanded : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["position"] = args ? args.position : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkflowGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering WorkflowGroup resources.
 */
export interface WorkflowGroupState {
    /**
     * Whether the group is expanded or collapsed.
     */
    expanded?: pulumi.Input<boolean>;
    /**
     * The kind of the workflow group.. Value must be one of `simple`, `incident`, `post_mortem`, `action_item`, `pulse`,
     * `alert`.
     */
    kind?: pulumi.Input<string>;
    /**
     * The name of the workflow group.
     */
    name?: pulumi.Input<string>;
    /**
     * The position of the workflow group
     */
    position?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a WorkflowGroup resource.
 */
export interface WorkflowGroupArgs {
    /**
     * Whether the group is expanded or collapsed.
     */
    expanded?: pulumi.Input<boolean>;
    /**
     * The kind of the workflow group.. Value must be one of `simple`, `incident`, `post_mortem`, `action_item`, `pulse`,
     * `alert`.
     */
    kind?: pulumi.Input<string>;
    /**
     * The name of the workflow group.
     */
    name?: pulumi.Input<string>;
    /**
     * The position of the workflow group
     */
    position?: pulumi.Input<number>;
}
