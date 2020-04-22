import api from "../api"

const getMarkers = async ({ lat, lng }) => {
  const inNeedOfHelp = await api().get("InNeedOfHelp")
  const inNeedOfHelpWithType = inNeedOfHelp.body.map((marker, i) => ({
    ...marker,
    type: "inNeedOfHelp",
    id: "inNeedOfHelp" + i,
  }))
  const Helpers = await api().get("Helpers")
  const HelpersWithType = Helpers.body.map((marker, i) => ({
    ...marker,
    type: "helper",
    id: "helper" + i,
  }))
  const markers = [...HelpersWithType, ...inNeedOfHelpWithType]
  return markers
}

export default getMarkers
