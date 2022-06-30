<script setup>
import tableData from './mock'

const handleClick = (item) => {
  console.log(item)
}
</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%" row-key="id" border>
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleClick(scope.row)">Detail</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty :description="false">
          <template #description />
        </el-empty>
      </template>
    </el-table>
  </div>
</template>
