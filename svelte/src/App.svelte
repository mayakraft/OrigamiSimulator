<script>
  import Simulator from "./Simulator.svelte";
  import Settings from "./Settings.svelte";

  // example model
  import craneCP from "../../fold/crane-cp.fold?raw";

  // the origami model, in FOLD format
  let origami = JSON.parse(craneCP);
</script>

<Settings bind:origami />
<Simulator {origami} />
