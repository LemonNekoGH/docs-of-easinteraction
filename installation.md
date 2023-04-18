<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'

const tags = ref<{name: string}[]>([])

onMounted(() => {
  axios.get('https://api.github.com/repos/lemonnekogh/easinteraction-for-cadence/tags', {
    headers: {
      Authorization:`Bearer ${import.meta.env.VITE_APP_PAT}`
      }}).then(it => tags.value = it.data[0])
})
</script>
# Installation

::: warning
This tool is still working in progress, not recommanded for production
:::

### Compile and install
::: info
This tool require Go version > 1.19  
This page will check the latest tag of repository, if rate limit reached, it will show "latest" not version name such as v0.0.1
:::

If you have Golang development environment installed, this method maybe eaiser. 
```shell-vue
go install github.com/LemonNekoGH/easinteraction-for-cadence@{{ tags.name ?? 'latest' }}
```

### Install by homebrew :beer:
[Homebrew](https://brew.sh) is a package manager for macOS/Linux
#### Setup
```shell
$ brew tap LemonNekoGH/tap https://github.com/LemonNekoGH/tap
```
#### Install
```shell
$ brew update
$ brew install easi-gen
# or avoid clash
$ brew install LemonNekoGH/tap/easi-gen
```

