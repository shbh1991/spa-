
System.import('single-spa').then(function (singleSpa) {
    singleSpa.registerApplication(
        'navbar',
        () => System.import('navbar'),
        location => true
    );
    singleSpa.start();
});
System.import('single-spa').then(function (singleSpa) {
    singleSpa.registerApplication(
        'app2',
        () => System.import('app2'),
        location => true
    );
    singleSpa.start();
});
System.import('single-spa').then(function (singleSpa) {
    singleSpa.registerApplication(
        'app1',
        () => System.import('app1'),
        location => true
    );
    singleSpa.start();
});

