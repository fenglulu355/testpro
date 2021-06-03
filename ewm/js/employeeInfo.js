
let hatColor = {
    "0": "无帽子",
    "1": "红色",
    "2": "黄色",
    "3": "蓝色",
    "4": "白色",
    "5": "橙色",
}
var test = window.location.host, httpServer = '';
if (test) {
    let arr = test.split(':')
    let url = ''
    if (arr[0] == 'https' || arr[0] == 'http') {
        if (arr.length == 1 || arr.length == 2) {
            url = test
        }
        else if (arr.length == 3) {
            url = arr[0] + ':' + arr[1]
        }

    } else {
        if (arr.length == 1) {
            url ='http://'+ test
        }
        else if (arr.length == 2) {
            url = 'http://'+arr[0]
        }
        else if (arr.length == 3) {
            url = 'http://'+arr[0] + ':' + arr[1]
        }
    }
    console.log('arr', arr)
    console.log('url', url)
    httpServer = url + ':8081';

} else {
    httpServer = '';
}

let url = ''
console.log('httpServer', httpServer)
// 地址加接口   举例加/other
httpServer=httpServer+'/other'
// 请求信息
let resData = {
    employeeId: getQueryString("userId"),
    projectId: getQueryString("projectId"),
    isScan: "1",
}
$.ajax({
    type: "post",
    url: httpServer,
    data: resData,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//设置请求头
    cache: false,
    async: true,
    success: function (data, textStatus, jqXHR) {
        let employeeInfo = data.data


        if (data.code == 10000) {
            if (employeeInfo.badBehaviors.length > 0) {
                $("#navUl").attr("class", "ulClass")
                $("#navBad").removeClass("unshow")

            }
            let eplyhatColor = '', gender = '', isManager = ''
            if (employeeInfo.hatColor) {
                eplyhatColor = hatColor[employeeInfo.hatColor]
            }
            if (employeeInfo.isManager == '1') {
                isManager = "是";
            } else if (employeeInfo.isManager == '0') {
                isManager = "否";
            } else {
                isManager = "";
            }

            if (employeeInfo.gender == "1") {
                gender = "男";
            } else if (employeeInfo.gender == "2") {
                gender = "女";
            } else {
                gender = "";
            }

            $("#headUrl").attr("src", employeeInfo.headUrl || '');
            $("#employeeName").text(employeeInfo.employeeName || '');
            let baseInfo = `
                <p><span>性别：</span>${gender}</p>
                <p><span>民族：</span>${employeeInfo.nation || ''}</p>
                <p><span>地址：</span>${employeeInfo.address || ''}</p>
                <p><span>手机号：</span>${employeeInfo.phone || ''}</p>
                <p><span>证件号：</span>${employeeInfo.cardNumber || ''}</p>
            `
            $("#baseInfo").html(baseInfo);
            let workInfo = `
            <p><span>所在项目：</span>${employeeInfo.projectName || ''}</p>
            <!-- <p><span>所在分部：</span>${employeeInfo.subName || ''}</p> -->
            <p><span>所在班组：</span>${employeeInfo.teamName || ''}</p>
            <p><span>是否管理层：</span>${isManager || ''}</p>
            <p><span>工种：</span>${employeeInfo.workName || ''}</p>
            <p><span>帽子颜色：</span>${eplyhatColor || ''}</p>
            <p><span>设备编号：</span>${employeeInfo.deviceImei || ''}</p>
            <p><span>IC卡号：</span>${employeeInfo.icCard || ''}</p>
            <p><span>入职时间：</span>${employeeInfo.hireDate || ''}</p>
            `
            $("#workInfo").html(workInfo);
            let badInfo = "";

            employeeInfo.badBehaviors.forEach((obj, index) => {
                badInfo += `
                <p>
                    <span>${index + 1}、</span>
                    <span>${employeeInfo.projectName || ''}</span>
                    <span>${obj.badBehavior || ''}</span>
                    <span>${obj.happenTime || ''}</span>
                </p>
                `
            })

            $("#badInfo").html(badInfo);

        } else {
            alert("请求失败！");

        }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert("请求失败！");
    }
});
$("#navUl>li").on("click", function () {
    var index = $(this).index();
    $(this).addClass("choseClass").siblings().removeClass("choseClass");
    $("#content>div").eq(index).addClass("show").siblings().removeClass("show")
})


function getQueryString(name) { //和一般的获取查询字符串不一样，此方法只用来获取？后面的内容
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var a = window.location.href
    var r = a.substr(a.indexOf('?')).substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};