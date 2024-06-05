<script lang="ts">
    import Singletons from "../client/Singletons";
    let content = Singletons.AppManager.getParagraph();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p><b>{content}</b></p>