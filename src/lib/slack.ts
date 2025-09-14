import { WebClient } from "@slack/web-api"

const client = new WebClient(process.env.SLACK_BOT_TOKEN)

export interface NudgeMessage {
  userId: string
  toolName: string
  messageType: "reminder" | "success_story" | "tip"
  content: string
}

export async function sendNudge(channelId: string, message: NudgeMessage) {
  try {
    const blocks = [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Optivus Weekly Pulse",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Hi <@${message.userId}>, quick 1-minute check:`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `1) Did you use ${message.toolName} this week?`,
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Yes",
          },
          value: "yes",
          action_id: "used_tool_yes",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "2) About how many hours did this save you this week?",
        },
        accessory: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select hours",
          },
          options: [
            { text: { type: "plain_text", text: "0-1 hours" }, value: "1" },
            { text: { type: "plain_text", text: "2-5 hours" }, value: "3" },
            { text: { type: "plain_text", text: "6-10 hours" }, value: "8" },
            { text: { type: "plain_text", text: "10+ hours" }, value: "12" },
          ],
          action_id: "hours_saved",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "3) On a scale of 1-5, how clear were communications about using the tool?",
        },
        accessory: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select rating",
          },
          options: [
            { text: { type: "plain_text", text: "1 - Poor" }, value: "1" },
            { text: { type: "plain_text", text: "2 - Fair" }, value: "2" },
            { text: { type: "plain_text", text: "3 - Good" }, value: "3" },
            { text: { type: "plain_text", text: "4 - Very Good" }, value: "4" },
            { text: { type: "plain_text", text: "5 - Excellent" }, value: "5" },
          ],
          action_id: "comm_score",
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: "Your answers help your team measure real ROI. Thanks!",
          },
        ],
      },
    ]

    await client.chat.postMessage({
      channel: channelId,
      blocks,
      text: "Optivus Weekly Pulse", // Fallback text
    })
  } catch (error) {
    console.error("Error sending Slack message:", error)
    throw error
  }
}

export async function sendReminder(channelId: string, message: NudgeMessage) {
  try {
    const blocks = [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Hey team — quick reminder: use ${message.toolName} to ${message.content}`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Need help? Check out our quick guide:",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "View Guide",
          },
          url: "https://docs.example.com/guide",
          action_id: "view_guide",
        },
      },
    ]

    await client.chat.postMessage({
      channel: channelId,
      blocks,
      text: "Optivus Reminder", // Fallback text
    })
  } catch (error) {
    console.error("Error sending Slack reminder:", error)
    throw error
  }
}

export async function sendSuccessStory(channelId: string, message: NudgeMessage) {
  try {
    const blocks = [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Win:* ${message.content}`,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: "💡 Try this quick tip to get started!",
          },
        ],
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Get Started",
            },
            style: "primary",
            action_id: "get_started",
          },
        ],
      },
    ]

    await client.chat.postMessage({
      channel: channelId,
      blocks,
      text: "Optivus Success Story", // Fallback text
    })
  } catch (error) {
    console.error("Error sending Slack success story:", error)
    throw error
  }
}
