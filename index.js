const axios = require("axios");
const config = require('./config')

$(function () {
    $('.btn').on('click', function () {
        let title = $('#input').val();
        let content = $('#content').val();
        if (!title) {
            $('#showMessage').text('请填写文章标题!');
            $('#showMessage').attr({ "class": 'warning' })
            return;
        }
        if (!content) {
            $('#showMessage').text('请填写文章内容!');
            $('#showMessage').attr({ "class": 'warning' })
            return;
        }
        axios.post(config.req, {
            title,
            content
        })
            .then(function (response) {
                console.log(response);
                $('#input').val('');
                $('#content').val('');
                $('#showMessage').text('提交成功!');
                $('#showMessage').attr({ "class": 'showMessage' })
            })
            .catch(function (err) {
                $('#showMessage').text(`提交失败:  ${err}`);
                $('#showMessage').attr({ "class": 'warning' })
            })
    })
})

