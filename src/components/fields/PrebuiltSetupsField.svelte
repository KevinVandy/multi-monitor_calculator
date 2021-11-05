<script lang="ts">
  import Select, { Option } from '@smui/select';
  import { ShortCode } from '../../utils/enums';
  import { id } from '../../stores/SetupStore';
  import communitySubmissions from '../../utils/communitySubmissions.json';

  const handleSelectSetup = (e) => {
    const selectedSetupId = parseIdFromSearch(e.detail.value);
    if ($id !== selectedSetupId && idToSubmissionMap[selectedSetupId])
      window.location.href = `${location.origin}${location.pathname}?${e.detail.value}`;
  };

  const parseIdFromSearch = (searchString) =>
    new URLSearchParams(searchString).get(ShortCode.SETUP_ID);

  const idToSubmissionMap = Object.values(communitySubmissions).reduce(
    (acc, submission) => {
      acc[parseIdFromSearch(submission)] = submission;
      return acc;
    },
    {}
  );
</script>

<div>
  <Select
    label="Browse a Prebuilt Community Submission"
    on:MDCSelect:change={handleSelectSetup}
    style="width:clamp(300px, 400px, 100vw);"
    value={idToSubmissionMap[$id]}
    variant="outlined"
  >
    {#each Object.entries(communitySubmissions) as cSubmission}
      <Option value={cSubmission[1]}>{cSubmission[0]}</Option>
    {/each}
  </Select>
</div>

<style>
  div {
    margin: 1rem auto;
    display: flex;
    justify-content: center;
  }
</style>
