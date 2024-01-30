<template>
  <div class="flex flex-col min-h-[100dvh] bg-gray-800 text-white item-stretch">
    <HeaderPageHeader />

    <div class="flex flex-grow">
      <aside :style="sidebarElementStyle" ref="sidebarElement">
        <BodySidebarChats />
      </aside>

      <button
        aria-label="Resize"
        class="w-8 relative t-0 b-0 bg-gray-700 hover:bg-gray-600 cursor-col-resize"
        @mousedown="onMouseDown"
      />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebarElement = ref<HTMLElement | null>(null)
const sidebarElementStyle = ref({
  width: '200px'
})

const changeWidth = (width: number) => {
  sidebarElementStyle.value.width = `${width}px`
}

const onMouseDown = (e: MouseEvent) => {
  e.preventDefault()

  const startX = e.pageX
  const startWidth = sidebarElement.value!.getBoundingClientRect().width

  const onMouseMove = (e: MouseEvent) => {
    const width = startWidth - startX + e.pageX

    sidebarElementStyle.value = {
      width: `${width}px`
    }
    requestAnimationFrame(() => changeWidth(width))
  }

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}
</script>
