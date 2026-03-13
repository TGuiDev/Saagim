function BackgroundLayers() {
  return (
    <>
      <div className="bg-mesh absolute -z-20" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_12%,rgba(235,158,169,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(204,139,134,0.18),transparent_40%)]"
        aria-hidden="true"
      />
    </>
  )
}

export default BackgroundLayers
