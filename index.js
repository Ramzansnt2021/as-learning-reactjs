document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', function () {
    const openItem = document.querySelector('.accordion-header.active')

    // Close currently open accordion (if any)
    if (openItem && openItem !== this) {
      openItem.classList.remove('active')
      openItem.nextElementSibling.style.maxHeight = null
      openItem.nextElementSibling.style.padding = '0 15px'
    }

    // Toggle the clicked accordion
    this.classList.toggle('active')
    const content = this.nextElementSibling

    if (this.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px'
      content.style.padding = '15px'
    } else {
      content.style.maxHeight = null
      content.style.padding = '0 15px'
    }
  })
})
