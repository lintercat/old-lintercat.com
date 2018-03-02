<template lang='pug'>
  .products
    products-header
    products-list
</template>

<script>
import ProductsHeader from '@/components/Products-header'
import ProductsList from '@/components/Products-list'

export default {
  components: {
    ProductsHeader,
    ProductsList
  }
}
</script>
