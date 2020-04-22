import config from "./config"
export default userId => {
  return {
    client_session_token_ttl: 600,
    resources_ttl: 604800,
    user_tracking_id: userId,
    notifications: {
      endpoint: `${config.HOST}/api/AuthenticationUpdate`,
      topics: [
        "resource_update",
        "task_completion",
        "check_completion",
        "session_completion",
      ],
      auth_token: process.env.THIS_API_KEY,
    },
    requested_checks: [
      {
        type: "ID_DOCUMENT_AUTHENTICITY",
        config: {},
      },
    ],
    requested_tasks: [
      {
        type: "ID_DOCUMENT_TEXT_DATA_EXTRACTION",
        config: {
          manual_check: "NEVER",
        },
      },
    ],
    sdk_config: {
      allowed_capture_methods: "CAMERA_AND_UPLOAD",
      primary_colour: "#2d9fff",
      preset_issuing_country: "GBR",
      success_url: `${config.HOST}/HelpersCenter/Success`,
      error_url: `${config.HOST}/HelpersCenter/Error`,
    },
  }
}
