applicationCache.addEventListener('updateready', function(e) {
        if (applicationCache.status == applicationCache.UPDATEREADY) {
            applicationCache.swapCache(); //使用新版本资源
            window.location.reload(); //刷新页面
        }
    }, false);
