<template>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in stu">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.age }}</td>
                    <td>
                        <button @click="remove(index)">移除</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input id="name" v-model="user.name">
                    </td>
                    <td>
                        <input id="age" v-model="user.age">
                    </td>
                    <td>
                        <button @click="insert">添加</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tr>
                <td></td>
                <td v-for="row in categories">{{ row }}</td>
            </tr>
            <tr v-for="user in series">
                <td>{{ user.name }}</td>
                <td v-for="data in user.data">{{ data }}</td>
            </tr>
        </table>
        <v-chart :config="config"></v-chart>
    </div>
</template>

<script>
    export default {
        name: "tables",
        data() {
            return {
                user: {
                    name: '',
                    age: ''
                },
                stu: [
                    {'name': 'Akashi', 'age': 17},
                    {'name': 'Asuka', 'age': 18},
                    {'name': 'Gakki', 'age': 19}
                ],
                categories: ['Apple', 'Banana', 'Orange'],
                series: [{
                    'name': 'Akashi',
                    'data': [4, 3, 2]
                }, {
                    'name': 'Asuka',
                    'data': [3, 2, 1]
                }]
            }
        },
        methods: {
            insert () {
                this.stu.push(this.user)
            },
            remove (index) {
                this.stu.splice(index,1)
            }
        },
        computed: {
            config () {
                return {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'BAR'
                    },
                    subtitle: {
                        text: 'bar'
                    },
                    xAxis: {
                        categories: this.categories
                    },
                    series: this.series
                }
            }
        }
    }
</script>

<style scoped>

</style>