import React from "react";

export function Isotope(props) {
  return (
    <span
      data-hash="{props.owl_hash}"
      data-difficulty="{props.difficulty}"
      data-start="{props.start}"
      data-status="{props.status}"
      data-end="{props.format_end}"
      data-created="{props.format_created}"
      data-seconds="{props.seconds}"
      data-importance="{props.importance}"
      data-usefulness="{props.usefulness}"
    >
      <article></article>
    </span>
  );
}
