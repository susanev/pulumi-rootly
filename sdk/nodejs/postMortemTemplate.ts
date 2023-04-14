// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PostMortemTemplate extends pulumi.CustomResource {
    /**
     * Get an existing PostMortemTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PostMortemTemplateState, opts?: pulumi.CustomResourceOptions): PostMortemTemplate {
        return new PostMortemTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rootly:index/postMortemTemplate:PostMortemTemplate';

    /**
     * Returns true if the given object is an instance of PostMortemTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PostMortemTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PostMortemTemplate.__pulumiType;
    }

    /**
     * The postmortem template. Liquid syntax and markdown are supported.
     */
    public readonly content!: pulumi.Output<string>;
    /**
     * Default selected template when editing a postmortem
     */
    public readonly default!: pulumi.Output<boolean>;
    /**
     * The format of the input.. Value must be one of `html`, `markdown`.
     */
    public readonly format!: pulumi.Output<string | undefined>;
    /**
     * The name of the postmortem template
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a PostMortemTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PostMortemTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PostMortemTemplateArgs | PostMortemTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PostMortemTemplateState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as PostMortemTemplateArgs | undefined;
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["default"] = args ? args.default : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PostMortemTemplate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PostMortemTemplate resources.
 */
export interface PostMortemTemplateState {
    /**
     * The postmortem template. Liquid syntax and markdown are supported.
     */
    content?: pulumi.Input<string>;
    /**
     * Default selected template when editing a postmortem
     */
    default?: pulumi.Input<boolean>;
    /**
     * The format of the input.. Value must be one of `html`, `markdown`.
     */
    format?: pulumi.Input<string>;
    /**
     * The name of the postmortem template
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PostMortemTemplate resource.
 */
export interface PostMortemTemplateArgs {
    /**
     * The postmortem template. Liquid syntax and markdown are supported.
     */
    content: pulumi.Input<string>;
    /**
     * Default selected template when editing a postmortem
     */
    default?: pulumi.Input<boolean>;
    /**
     * The format of the input.. Value must be one of `html`, `markdown`.
     */
    format?: pulumi.Input<string>;
    /**
     * The name of the postmortem template
     */
    name?: pulumi.Input<string>;
}
