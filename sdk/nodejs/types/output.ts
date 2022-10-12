// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

export interface DashboardPanelParams {
    datasets?: outputs.DashboardPanelParamsDataset[];
    display: string;
}

export interface DashboardPanelParamsDataset {
    aggregate?: outputs.DashboardPanelParamsDatasetAggregate;
    collection: string;
    filters?: outputs.DashboardPanelParamsDatasetFilter[];
    groupBy: string;
    name: string;
}

export interface DashboardPanelParamsDatasetAggregate {
    cumulative: boolean;
    key: string;
    operation: string;
}

export interface DashboardPanelParamsDatasetFilter {
    operation: string;
    rules?: outputs.DashboardPanelParamsDatasetFilterRule[];
}

export interface DashboardPanelParamsDatasetFilterRule {
    condition: string;
    key: string;
    operation: string;
    value: string;
}

export interface FunctionalitySlackAlias {
    id: string;
    name: string;
}

export interface FunctionalitySlackChannel {
    id: string;
    name: string;
}

export interface GetCausesCause {
    description: string;
    id: string;
    name: string;
    slug: string;
}

export interface GetCustomFieldOptionsCustomFieldOption {
    color: string;
    customFieldId: number;
    id: string;
    position: number;
    value: string;
}

export interface GetCustomFieldsCustomField {
    description: string;
    enabled: boolean;
    id: string;
    kind: string;
    label: string;
    requireds: string[];
    showns: string[];
    slug: string;
}

export interface GetEnvironmentsEnvironment {
    color: string;
    description: string;
    id: string;
    name: string;
    slug: string;
}

export interface GetFunctionalitiesFunctionality {
    color: string;
    description: string;
    id: string;
    name: string;
    slug: string;
}

export interface GetIncidentRolesIncidentRole {
    description: string;
    enabled: boolean;
    id: string;
    name: string;
    slug: string;
    summary: string;
}

export interface GetIncidentTypesIncidentType {
    description: string;
    id: string;
    name: string;
    slug: string;
}

export interface GetServicesService {
    color: string;
    description: string;
    id: string;
    name: string;
    publicDescription: string;
    slug: string;
}

export interface GetSeveritiesSeverity {
    color: string;
    description: string;
    id: string;
    name: string;
    severity: string;
    slug: string;
}

export interface GetTeamsTeam {
    color: string;
    description: string;
    id: string;
    name: string;
    slug: string;
}

export interface ServiceSlackAlias {
    id: string;
    name: string;
}

export interface ServiceSlackChannel {
    id: string;
    name: string;
}

export interface TeamSlackAlias {
    id: string;
    name: string;
}

export interface TeamSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowActionItemTriggerParams {
    incidentActionItemCondition?: string;
    incidentActionItemConditionGroup?: string;
    incidentActionItemConditionKind?: string;
    incidentActionItemConditionPriority?: string;
    incidentActionItemConditionStatus?: string;
    incidentActionItemGroupIds: string[];
    incidentActionItemKinds: string[];
    incidentActionItemPriorities: string[];
    incidentActionItemStatuses: string[];
    incidentCondition?: string;
    incidentConditionAcknowledgedAt: string;
    incidentConditionDetectedAt: string;
    incidentConditionEnvironment?: string;
    incidentConditionFunctionality?: string;
    incidentConditionGroup?: string;
    incidentConditionIncidentRoles: string;
    incidentConditionIncidentType?: string;
    incidentConditionKind?: string;
    incidentConditionMitigatedAt: string;
    incidentConditionResolvedAt: string;
    incidentConditionService?: string;
    incidentConditionSeverity?: string;
    incidentConditionStartedAt: string;
    incidentConditionStatus?: string;
    incidentConditionSummary: string;
    incidentConditionVisibility?: string;
    incidentConditionalInactivity: string;
    incidentKinds: string[];
    incidentStatuses: string[];
    incidentVisibilities: string[];
    triggerType?: string;
    triggers: string[];
}

export interface WorkflowAlertTriggerParams {
    alertCondition?: string;
    alertConditionLabel?: string;
    alertConditionLabelUseRegexp: boolean;
    alertConditionPayload?: string;
    alertConditionPayloadUseRegexp: boolean;
    alertConditionSource?: string;
    alertConditionSourceUseRegexp: boolean;
    alertLabels: string[];
    alertPayloads: string[];
    alertQueryPayload: string;
    alertSources: string[];
    triggerType?: string;
    triggers: string[];
}

export interface WorkflowIncidentTriggerParams {
    incidentCondition?: string;
    incidentConditionAcknowledgedAt: string;
    incidentConditionDetectedAt: string;
    incidentConditionEnvironment?: string;
    incidentConditionFunctionality?: string;
    incidentConditionGroup?: string;
    incidentConditionIncidentRoles: string;
    incidentConditionIncidentType?: string;
    incidentConditionKind?: string;
    incidentConditionMitigatedAt: string;
    incidentConditionResolvedAt: string;
    incidentConditionService?: string;
    incidentConditionSeverity?: string;
    incidentConditionStartedAt: string;
    incidentConditionStatus?: string;
    incidentConditionSummary: string;
    incidentConditionVisibility?: string;
    incidentConditionalInactivity: string;
    incidentKinds: string[];
    incidentStatuses: string[];
    incidentVisibilities: string[];
    triggerType?: string;
    triggers: string[];
}

export interface WorkflowPostMortemTriggerParams {
    incidentCondition?: string;
    incidentConditionAcknowledgedAt: string;
    incidentConditionDetectedAt: string;
    incidentConditionEnvironment?: string;
    incidentConditionFunctionality?: string;
    incidentConditionGroup?: string;
    incidentConditionIncidentRoles: string;
    incidentConditionIncidentType?: string;
    incidentConditionKind?: string;
    incidentConditionMitigatedAt: string;
    incidentConditionResolvedAt: string;
    incidentConditionService?: string;
    incidentConditionSeverity?: string;
    incidentConditionStartedAt: string;
    incidentConditionStatus?: string;
    incidentConditionSummary: string;
    incidentConditionVisibility?: string;
    incidentConditionalInactivity: string;
    incidentKinds: string[];
    incidentPostMortemCauseIds: string[];
    incidentPostMortemCondition?: string;
    incidentPostMortemConditionCause?: string;
    incidentPostMortemConditionStatus?: string;
    incidentPostMortemStatuses: string[];
    incidentStatuses: string[];
    incidentVisibilities: string[];
    triggerType?: string;
    triggers: string[];
}

export interface WorkflowPulseTriggerParams {
    pulseCondition?: string;
    pulseConditionLabel?: string;
    pulseConditionLabelUseRegexp: boolean;
    pulseConditionPayload?: string;
    pulseConditionPayloadUseRegexp: boolean;
    pulseConditionSource?: string;
    pulseConditionSourceUseRegexp: boolean;
    pulseLabels: string[];
    pulsePayloads: string[];
    pulseQueryPayload: string;
    pulseSources: string[];
    triggerType?: string;
    triggers: string[];
}

export interface WorkflowTaskAddActionItemTaskParams {
    assignedToUserId?: string;
    description?: string;
    kind?: string;
    postToIncidentTimeline?: boolean;
    postToSlackChannels?: outputs.WorkflowTaskAddActionItemTaskParamsPostToSlackChannel[];
    priority: string;
    status: string;
    summary: string;
    taskType?: string;
}

export interface WorkflowTaskAddActionItemTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskAddRoleTaskParams {
    assignedToUserId?: string;
    incidentRoleId: string;
    taskType?: string;
}

export interface WorkflowTaskAddSlackBookmarkTaskParams {
    channel: {[key: string]: any};
    emoji?: string;
    link?: string;
    playbookId?: string;
    taskType?: string;
    title?: string;
}

export interface WorkflowTaskAddTeamTaskParams {
    groupId: string;
    taskType?: string;
}

export interface WorkflowTaskAddToTimelineTaskParams {
    event: string;
    postToSlackChannels?: outputs.WorkflowTaskAddToTimelineTaskParamsPostToSlackChannel[];
    taskType?: string;
    url?: string;
}

export interface WorkflowTaskAddToTimelineTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskArchiveSlackChannelsTaskParams {
    channels: outputs.WorkflowTaskArchiveSlackChannelsTaskParamsChannel[];
    taskType?: string;
}

export interface WorkflowTaskArchiveSlackChannelsTaskParamsChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskAttachDatadogDashboardsTaskParams {
    dashboards: outputs.WorkflowTaskAttachDatadogDashboardsTaskParamsDashboard[];
    postToSlackChannels?: outputs.WorkflowTaskAttachDatadogDashboardsTaskParamsPostToSlackChannel[];
    taskType?: string;
}

export interface WorkflowTaskAttachDatadogDashboardsTaskParamsDashboard {
    id: string;
    name: string;
}

export interface WorkflowTaskAttachDatadogDashboardsTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskAutoAssignRoleOpsgenieTaskParams {
    incidentRoleId: string;
    schedule: {[key: string]: any};
    taskType?: string;
}

export interface WorkflowTaskAutoAssignRolePagerdutyTaskParams {
    escalationPolicy?: {[key: string]: any};
    incidentRoleId: string;
    schedule?: {[key: string]: any};
    taskType?: string;
}

export interface WorkflowTaskAutoAssignRoleVictorOpsTaskParams {
    incidentRoleId: string;
    schedule: {[key: string]: any};
    taskType?: string;
}

export interface WorkflowTaskCallPeopleTaskParams {
    content: string;
    name: string;
    phoneNumbers: string[];
    taskType?: string;
}

export interface WorkflowTaskCreateAirtableTableRecordTaskParams {
    baseKey: string;
    customFieldsMapping?: string;
    tableName: string;
    taskType?: string;
}

export interface WorkflowTaskCreateAsanaSubtaskTaskParams {
    assignUserEmail?: string;
    completion: {[key: string]: any};
    customFieldsMapping?: string;
    notes?: string;
    parentTaskId: string;
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateAsanaTaskTaskParams {
    assignUserEmail?: string;
    completion: {[key: string]: any};
    customFieldsMapping?: string;
    projects: outputs.WorkflowTaskCreateAsanaTaskTaskParamsProject[];
    taskType?: string;
    title: string;
    workspace: {[key: string]: any};
}

export interface WorkflowTaskCreateAsanaTaskTaskParamsProject {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateConfluencePageTaskParams {
    ancestor?: {[key: string]: any};
    content?: string;
    postMortemTemplateId?: string;
    space: {[key: string]: any};
    taskType?: string;
    template?: {[key: string]: any};
    title: string;
}

export interface WorkflowTaskCreateDatadogNotebookTaskParams {
    content?: string;
    kind: string;
    postMortemTemplateId?: string;
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateDropboxPaperPageTaskParams {
    content?: string;
    namespace?: {[key: string]: any};
    parentFolder?: {[key: string]: any};
    postMortemTemplateId?: string;
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateGithubIssueTaskParams {
    body?: string;
    repository: {[key: string]: any};
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateGoToMeetingTaskParams {
    conferenceCallInfo?: string;
    passwordRequired?: boolean;
    postToIncidentTimeline?: boolean;
    postToSlackChannels?: outputs.WorkflowTaskCreateGoToMeetingTaskParamsPostToSlackChannel[];
    subject: string;
    taskType?: string;
}

export interface WorkflowTaskCreateGoToMeetingTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateGoogleCalendarEventTaskParams {
    attendees: string[];
    canGuestsInviteOthers?: boolean;
    canGuestsModifyEvent?: boolean;
    canGuestsSeeOtherGuests?: boolean;
    conferenceSolutionKey?: string;
    daysUntilMeeting: number;
    description: string;
    excludeWeekends?: boolean;
    meetingDuration: string;
    postToIncidentTimeline?: boolean;
    sendUpdates?: boolean;
    summary: string;
    taskType?: string;
    timeOfMeeting: string;
    timeZone?: string;
}

export interface WorkflowTaskCreateGoogleDocsPageTaskParams {
    content?: string;
    drive?: {[key: string]: any};
    parentFolder?: {[key: string]: any};
    permissions?: string;
    postMortemTemplateId?: string;
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateGoogleMeetingTaskParams {
    conferenceSolutionKey?: string;
    description: string;
    postToIncidentTimeline?: boolean;
    postToSlackChannels?: outputs.WorkflowTaskCreateGoogleMeetingTaskParamsPostToSlackChannel[];
    summary: string;
    taskType?: string;
}

export interface WorkflowTaskCreateGoogleMeetingTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateIncidentTaskParams {
    customFieldsMapping?: string;
    environmentIds?: string[];
    functionalityIds?: string[];
    groupIds?: string[];
    incidentTypeIds?: string[];
    private?: boolean;
    serviceIds?: string[];
    severityId?: string;
    summary?: string;
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateJiraIssueTaskParams {
    assignUserEmail?: string;
    customFieldsMapping?: string;
    description?: string;
    dueDate?: string;
    issueType: {[key: string]: any};
    labels?: string;
    priority?: {[key: string]: any};
    projectKey: string;
    reporterUserEmail?: string;
    status?: {[key: string]: any};
    taskType?: string;
    title: string;
    updatePayload?: string;
}

export interface WorkflowTaskCreateJiraSubtaskTaskParams {
    assignUserEmail?: string;
    customFieldsMapping?: string;
    description?: string;
    dueDate?: string;
    labels?: string;
    parentIssueId: string;
    priority?: {[key: string]: any};
    projectKey: string;
    reporterUserEmail?: string;
    status?: {[key: string]: any};
    subtaskIssueType: {[key: string]: any};
    taskType?: string;
    title: string;
    updatePayload?: string;
}

export interface WorkflowTaskCreateLinearIssueCommentTaskParams {
    body: string;
    issueId: string;
    taskType?: string;
}

export interface WorkflowTaskCreateLinearIssueTaskParams {
    description?: string;
    priority?: {[key: string]: any};
    state: {[key: string]: any};
    taskType?: string;
    team: {[key: string]: any};
    title: string;
}

export interface WorkflowTaskCreateLinearSubtaskIssueTaskParams {
    description?: string;
    parentIssueId: string;
    priority?: {[key: string]: any};
    state: {[key: string]: any};
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateMicrosoftTeamsMeetingTaskParams {
    name: string;
    postToIncidentTimeline?: boolean;
    postToSlackChannels?: outputs.WorkflowTaskCreateMicrosoftTeamsMeetingTaskParamsPostToSlackChannel[];
    subject: string;
    taskType?: string;
}

export interface WorkflowTaskCreateMicrosoftTeamsMeetingTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateNotionPageTaskParams {
    parentPage: {[key: string]: any};
    postMortemTemplateId?: string;
    taskType?: string;
}

export interface WorkflowTaskCreateOpsgenieAlertTaskParams {
    description?: string;
    escalations?: outputs.WorkflowTaskCreateOpsgenieAlertTaskParamsEscalation[];
    message: string;
    priority?: string;
    schedules?: outputs.WorkflowTaskCreateOpsgenieAlertTaskParamsSchedule[];
    taskType?: string;
    teams?: outputs.WorkflowTaskCreateOpsgenieAlertTaskParamsTeam[];
    users?: outputs.WorkflowTaskCreateOpsgenieAlertTaskParamsUser[];
}

export interface WorkflowTaskCreateOpsgenieAlertTaskParamsEscalation {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateOpsgenieAlertTaskParamsSchedule {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateOpsgenieAlertTaskParamsTeam {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateOpsgenieAlertTaskParamsUser {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateServiceNowIncidentTaskParams {
    completion?: {[key: string]: any};
    customFieldsMapping?: string;
    description?: string;
    priority?: {[key: string]: any};
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateShortcutStoryTaskParams {
    archivation: {[key: string]: any};
    description?: string;
    dueDate?: string;
    kind: string;
    labels?: string;
    project: {[key: string]: any};
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateShortcutTaskTaskParams {
    completion: {[key: string]: any};
    description: string;
    parentStoryId: string;
    taskType?: string;
}

export interface WorkflowTaskCreateSlackChannelTaskParams {
    private?: string;
    taskType?: string;
    title: string;
    workspace: {[key: string]: any};
}

export interface WorkflowTaskCreateTrelloCardTaskParams {
    archivation?: {[key: string]: any};
    board: {[key: string]: any};
    description?: string;
    dueDate?: string;
    labels?: outputs.WorkflowTaskCreateTrelloCardTaskParamsLabel[];
    list: {[key: string]: any};
    taskType?: string;
    title: string;
}

export interface WorkflowTaskCreateTrelloCardTaskParamsLabel {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateWebexMeetingTaskParams {
    password?: string;
    postToIncidentTimeline?: boolean;
    postToSlackChannels?: outputs.WorkflowTaskCreateWebexMeetingTaskParamsPostToSlackChannel[];
    taskType?: string;
    topic: string;
}

export interface WorkflowTaskCreateWebexMeetingTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskCreateZendeskTicketTaskParams {
    comment?: string;
    completion?: {[key: string]: any};
    kind: string;
    priority?: {[key: string]: any};
    subject: string;
    tags?: string;
    taskType?: string;
}

export interface WorkflowTaskCreateZoomMeetingTaskParams {
    alternativeHosts?: string[];
    autoRecording?: string;
    createAsEmail?: string;
    password?: string;
    postToIncidentTimeline?: boolean;
    postToSlackChannels?: outputs.WorkflowTaskCreateZoomMeetingTaskParamsPostToSlackChannel[];
    taskType?: string;
    topic: string;
}

export interface WorkflowTaskCreateZoomMeetingTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskGetAlertsTaskParams {
    environmentIds?: string[];
    labels?: string[];
    pastDuration: string;
    postToSlackChannels?: outputs.WorkflowTaskGetAlertsTaskParamsPostToSlackChannel[];
    serviceIds?: string[];
    sources?: string[];
    taskType?: string;
}

export interface WorkflowTaskGetAlertsTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskGetGithubCommitsTaskParams {
    branch: string;
    githubRepositoryNames?: string[];
    pastDuration: string;
    postToSlackChannels?: outputs.WorkflowTaskGetGithubCommitsTaskParamsPostToSlackChannel[];
    serviceIds?: string[];
    taskType?: string;
}

export interface WorkflowTaskGetGithubCommitsTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskGetGitlabCommitsTaskParams {
    branch: string;
    gitlabRepositoryNames?: string[];
    pastDuration: string;
    postToSlackChannels?: outputs.WorkflowTaskGetGitlabCommitsTaskParamsPostToSlackChannel[];
    serviceIds?: string[];
    taskType?: string;
}

export interface WorkflowTaskGetGitlabCommitsTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskGetPulsesTaskParams {
    environmentIds?: string[];
    labels?: string[];
    pastDuration: string;
    postToSlackChannels?: outputs.WorkflowTaskGetPulsesTaskParamsPostToSlackChannel[];
    refs?: string[];
    serviceIds?: string[];
    sources?: string[];
    taskType?: string;
}

export interface WorkflowTaskGetPulsesTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskHTTPClientTaskParams {
    body?: string;
    eventUrl?: string;
    headers?: string;
    method?: string;
    params?: string;
    postToSlackChannels?: outputs.WorkflowTaskHTTPClientTaskParamsPostToSlackChannel[];
    succeedOnStatus: string;
    taskType?: string;
    url?: string;
}

export interface WorkflowTaskHTTPClientTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskInviteToSlackChannelOpsgenieTaskParams {
    channels?: outputs.WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannel[];
    schedule: {[key: string]: any};
    taskType?: string;
}

export interface WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskInviteToSlackChannelPagerdutyTaskParams {
    channels?: outputs.WorkflowTaskInviteToSlackChannelPagerdutyTaskParamsChannel[];
    escalationPolicy?: {[key: string]: any};
    schedule?: {[key: string]: any};
    taskType?: string;
}

export interface WorkflowTaskInviteToSlackChannelPagerdutyTaskParamsChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskInviteToSlackChannelTaskParams {
    channel: {[key: string]: any};
    slackUserGroups?: outputs.WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroup[];
    slackUsers?: outputs.WorkflowTaskInviteToSlackChannelTaskParamsSlackUser[];
    taskType?: string;
}

export interface WorkflowTaskInviteToSlackChannelTaskParamsSlackUser {
    id: string;
    name: string;
}

export interface WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroup {
    id: string;
    name: string;
}

export interface WorkflowTaskInviteToSlackChannelVictorOpsTaskParams {
    channels?: outputs.WorkflowTaskInviteToSlackChannelVictorOpsTaskParamsChannel[];
    schedule: {[key: string]: any};
    taskType?: string;
}

export interface WorkflowTaskInviteToSlackChannelVictorOpsTaskParamsChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskPageOpsgenieOnCallRespondersTaskParams {
    priority?: string;
    taskType?: string;
    teams?: outputs.WorkflowTaskPageOpsgenieOnCallRespondersTaskParamsTeam[];
    users?: outputs.WorkflowTaskPageOpsgenieOnCallRespondersTaskParamsUser[];
}

export interface WorkflowTaskPageOpsgenieOnCallRespondersTaskParamsTeam {
    id: string;
    name: string;
}

export interface WorkflowTaskPageOpsgenieOnCallRespondersTaskParamsUser {
    id: string;
    name: string;
}

export interface WorkflowTaskPagePagerdutyOnCallRespondersTaskParams {
    escalationPolicies?: outputs.WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicy[];
    message?: string;
    service: {[key: string]: any};
    taskType?: string;
    urgency?: string;
    users?: outputs.WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUser[];
}

export interface WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsEscalationPolicy {
    id: string;
    name: string;
}

export interface WorkflowTaskPagePagerdutyOnCallRespondersTaskParamsUser {
    id: string;
    name: string;
}

export interface WorkflowTaskPageVictorOpsOnCallRespondersTaskParams {
    escalationPolicies?: outputs.WorkflowTaskPageVictorOpsOnCallRespondersTaskParamsEscalationPolicy[];
    taskType?: string;
    users?: outputs.WorkflowTaskPageVictorOpsOnCallRespondersTaskParamsUser[];
}

export interface WorkflowTaskPageVictorOpsOnCallRespondersTaskParamsEscalationPolicy {
    id: string;
    name: string;
}

export interface WorkflowTaskPageVictorOpsOnCallRespondersTaskParamsUser {
    id: string;
    name: string;
}

export interface WorkflowTaskPrintTaskParams {
    message: string;
    taskType?: string;
}

export interface WorkflowTaskPublishIncidentTaskParams {
    event: string;
    incident: {[key: string]: any};
    publicTitle: string;
    status: string;
    statusPageId: string;
    taskType?: string;
}

export interface WorkflowTaskRedisClientTaskParams {
    commands: string;
    eventMessage?: string;
    eventUrl?: string;
    postToSlackChannels?: outputs.WorkflowTaskRedisClientTaskParamsPostToSlackChannel[];
    taskType?: string;
    url: string;
}

export interface WorkflowTaskRedisClientTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskRenameSlackChannelTaskParams {
    channel?: {[key: string]: any};
    taskType?: string;
    title: string;
}

export interface WorkflowTaskRunCommandHerokuTaskParams {
    appName: string;
    command: string;
    postToSlackChannels?: outputs.WorkflowTaskRunCommandHerokuTaskParamsPostToSlackChannel[];
    size: string;
    taskType?: string;
}

export interface WorkflowTaskRunCommandHerokuTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskSendDashboardReportTaskParams {
    body: string;
    dashboardIds: string[];
    from?: string;
    preheader?: string;
    subject: string;
    taskType?: string;
    tos: string[];
}

export interface WorkflowTaskSendEmailTaskParams {
    body: string;
    customLogoUrl?: string;
    from?: string;
    includeFooter?: boolean;
    includeHeader?: boolean;
    preheader?: string;
    subject: string;
    taskType?: string;
    tos: string[];
}

export interface WorkflowTaskSendSlackBlocksTaskParams {
    blocks: string;
    channels?: outputs.WorkflowTaskSendSlackBlocksTaskParamsChannel[];
    message?: string;
    sendAsEphemeral?: boolean;
    slackUserGroups?: outputs.WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroup[];
    slackUsers?: outputs.WorkflowTaskSendSlackBlocksTaskParamsSlackUser[];
    taskType?: string;
}

export interface WorkflowTaskSendSlackBlocksTaskParamsChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskSendSlackBlocksTaskParamsSlackUser {
    id: string;
    name: string;
}

export interface WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroup {
    id: string;
    name: string;
}

export interface WorkflowTaskSendSlackMessageTaskParams {
    channels?: outputs.WorkflowTaskSendSlackMessageTaskParamsChannel[];
    sendAsEphemeral?: boolean;
    slackUserGroups?: outputs.WorkflowTaskSendSlackMessageTaskParamsSlackUserGroup[];
    slackUsers?: outputs.WorkflowTaskSendSlackMessageTaskParamsSlackUser[];
    taskType?: string;
    text: string;
}

export interface WorkflowTaskSendSlackMessageTaskParamsChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskSendSlackMessageTaskParamsSlackUser {
    id: string;
    name: string;
}

export interface WorkflowTaskSendSlackMessageTaskParamsSlackUserGroup {
    id: string;
    name: string;
}

export interface WorkflowTaskSendSmsTaskParams {
    content: string;
    name: string;
    phoneNumbers: string[];
    taskType?: string;
}

export interface WorkflowTaskSnapshotDatadogGraphTaskParams {
    dashboards?: outputs.WorkflowTaskSnapshotDatadogGraphTaskParamsDashboard[];
    metricQueries?: string[];
    pastDuration: string;
    postToSlackChannels?: outputs.WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannel[];
    taskType?: string;
}

export interface WorkflowTaskSnapshotDatadogGraphTaskParamsDashboard {
    id: string;
    name: string;
}

export interface WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskSnapshotGrafanaDashboardTaskParams {
    dashboards: outputs.WorkflowTaskSnapshotGrafanaDashboardTaskParamsDashboard[];
    postToSlackChannels?: outputs.WorkflowTaskSnapshotGrafanaDashboardTaskParamsPostToSlackChannel[];
    taskType?: string;
}

export interface WorkflowTaskSnapshotGrafanaDashboardTaskParamsDashboard {
    id: string;
    name: string;
}

export interface WorkflowTaskSnapshotGrafanaDashboardTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskSnapshotLookerLookTaskParams {
    dashboards: outputs.WorkflowTaskSnapshotLookerLookTaskParamsDashboard[];
    postToSlackChannels?: outputs.WorkflowTaskSnapshotLookerLookTaskParamsPostToSlackChannel[];
    taskType?: string;
}

export interface WorkflowTaskSnapshotLookerLookTaskParamsDashboard {
    id: string;
    name: string;
}

export interface WorkflowTaskSnapshotLookerLookTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskSnapshotNewRelicGraphTaskParams {
    metricQuery: string;
    metricType: string;
    postToSlackChannels?: outputs.WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannel[];
    taskType?: string;
}

export interface WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannel {
    id: string;
    name: string;
}

export interface WorkflowTaskTriggerWorkflowTaskParams {
    kind?: string;
    resource?: {[key: string]: any};
    taskType?: string;
    workflow: {[key: string]: any};
}

export interface WorkflowTaskTweetTwitterMessageTaskParams {
    message: string;
    taskType?: string;
}

export interface WorkflowTaskUpdateAirtableTableRecordTaskParams {
    baseKey: string;
    customFieldsMapping?: string;
    recordId: string;
    tableName: string;
    taskType?: string;
}

export interface WorkflowTaskUpdateAsanaTaskTaskParams {
    assignUserEmail?: string;
    completion: {[key: string]: any};
    customFieldsMapping?: string;
    taskId: string;
    taskType?: string;
    title?: string;
}

export interface WorkflowTaskUpdateGithubIssueTaskParams {
    body?: string;
    completion: {[key: string]: any};
    issueId: string;
    taskType?: string;
    title?: string;
}

export interface WorkflowTaskUpdateGoogleCalendarEventTaskParams {
    adjustmentDays?: number;
    attendees?: string[];
    canGuestsInviteOthers?: boolean;
    canGuestsModifyEvent?: boolean;
    canGuestsSeeOtherGuests?: boolean;
    conferenceSolutionKey?: string;
    description?: string;
    eventId: string;
    meetingDuration?: string;
    postToIncidentTimeline?: boolean;
    replaceAttendees?: boolean;
    sendUpdates?: boolean;
    summary?: string;
    taskType?: string;
    timeOfMeeting?: string;
}

export interface WorkflowTaskUpdateIncidentPostmortemTaskParams {
    postmortemId?: string;
    status?: string;
    taskType?: string;
    title?: string;
}

export interface WorkflowTaskUpdateIncidentTaskParams {
    acknowledgedAt?: string;
    customFieldsMapping?: string;
    detectedAt?: string;
    environmentIds?: string[];
    functionalityIds?: string[];
    groupIds?: string[];
    incidentId?: string;
    incidentTypeIds?: string[];
    mitigatedAt?: string;
    private?: boolean;
    resolvedAt?: string;
    serviceIds?: string[];
    severityId?: string;
    startedAt?: string;
    status?: string;
    summary?: string;
    taskType?: string;
    title?: string;
}

export interface WorkflowTaskUpdateJiraIssueTaskParams {
    assignUserEmail?: string;
    customFieldsMapping?: string;
    description?: string;
    issueId: string;
    labels?: string;
    priority?: {[key: string]: any};
    projectKey: string;
    reporterUserEmail?: string;
    status?: {[key: string]: any};
    taskType?: string;
    title?: string;
    updatePayload?: string;
}

export interface WorkflowTaskUpdateLinearIssueTaskParams {
    description?: string;
    issueId: string;
    priority?: {[key: string]: any};
    state?: {[key: string]: any};
    taskType?: string;
    title?: string;
}

export interface WorkflowTaskUpdateOpsgenieAlertTaskParams {
    completion: {[key: string]: any};
    description?: string;
    message?: string;
    priority: string;
    taskType?: string;
}

export interface WorkflowTaskUpdatePagerdutyIncidentTaskParams {
    escalationLevel?: number;
    pagerdutyIncidentId: string;
    resolution?: string;
    status?: string;
    taskType?: string;
    title?: string;
    urgency?: string;
}

export interface WorkflowTaskUpdateServiceNowIncidentTaskParams {
    completion?: {[key: string]: any};
    customFieldsMapping?: string;
    description?: string;
    incidentId: string;
    priority?: {[key: string]: any};
    taskType?: string;
    title?: string;
}

export interface WorkflowTaskUpdateShortcutStoryTaskParams {
    archivation: {[key: string]: any};
    description?: string;
    dueDate?: string;
    labels?: string;
    storyId: string;
    taskType?: string;
    title?: string;
}

export interface WorkflowTaskUpdateShortcutTaskTaskParams {
    completion: {[key: string]: any};
    description?: string;
    parentStoryId: string;
    taskId: string;
    taskType?: string;
}

export interface WorkflowTaskUpdateSlackChannelTopicTaskParams {
    channel: {[key: string]: any};
    taskType?: string;
    topic: string;
}

export interface WorkflowTaskUpdateStatusTaskParams {
    inactivityTimeout?: string;
    status: string;
    taskType?: string;
}

export interface WorkflowTaskUpdateTrelloCardTaskParams {
    archivation: {[key: string]: any};
    board?: {[key: string]: any};
    cardId: string;
    description?: string;
    dueDate?: string;
    labels?: outputs.WorkflowTaskUpdateTrelloCardTaskParamsLabel[];
    list?: {[key: string]: any};
    taskType?: string;
    title?: string;
}

export interface WorkflowTaskUpdateTrelloCardTaskParamsLabel {
    id: string;
    name: string;
}

export interface WorkflowTaskUpdateZendeskTicketTaskParams {
    completion?: {[key: string]: any};
    priority?: {[key: string]: any};
    subject?: string;
    tags?: string;
    taskType?: string;
    ticketId: string;
}

