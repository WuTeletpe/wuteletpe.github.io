method: {
    async getList() {
        let res = await this.$Http.getContactList()
        this.list = res.data
    },
    async onSave(info) {
        if(this.isEdit) {
            // 编辑保存
            let res = await this.$Http.editContact(info)
            if(res.code === 200) {
                Toast('编辑成功')
                this.showEdit = false
                this.getList()
            }
        } else {
            // 新建保存
            let res = await this.$Http.newContactJson(info)
            if(res.code === 200) {
                Toast('新建成功')
                this.showEdit = false
                this.getList()
            }
        }
    },
    async onDelete(info) {
        let res = await this.$Http.delContact({
            id: info.id
        })
        if(res.code === 200) {
            Toast('删除成功')
            this.showEdit = false
            this.getList()
        }
    },
}
