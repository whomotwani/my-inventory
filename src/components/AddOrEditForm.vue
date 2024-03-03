<template>
    <form @submit.prevent>
        <input type="text" placeholder="Product name" class="form-control mb-3" />
        <input type="number" placeholder="Quantity" class="form-control mb-3" />
        <input type="text" placeholder="Unit of measurement" class="form-control mb-3" />
        <input type="date" placeholder="Expiry date" class="form-control mb-3" />

        <select class="form-control mb-3">
            <option disabled selected>Select category</option>
            <option>Electronics</option>
            <option>Medicines</option>
        </select>

        <textarea class="form-control mb-3" placeholder="Comments"></textarea>

        <input type="text" placeholder="Price" class="form-control mb-3" />

        <div class="d-flex gap-1">
            <button class="btn btn-primary">Add to shopping list</button>
            <span class="d-flex gap-1 ms-auto">
                <button class="btn btn-primary btn-outline mr-2">Close</button>
                <button class="btn btn-primary">{{ editMode ? 'Save changes' :  'Add product'}}</button>
            </span>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        editMode: {
            type: Boolean,
            default: false
        }
    }
}
</script>