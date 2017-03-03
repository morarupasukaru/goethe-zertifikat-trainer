class SpeechHelpersController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
        this.initData();
    }

    initData() {
        this.data = [
            {
                groupId: 'test',
                groups: [
                    {
                        groupId: 'test',
                        entries: [
                            'test'
                        ]
                    }
                ]
            }
        ];
    }

    showAll() {
        for (let i = 0; i< this.data.length; i++) {
            if (!!this.data[i].groups && !!this.data[i].groups.length > 0) {
                for (let j = 0; i < this.data[i].groups.length; j++) {
                    this.show(this.data[i].groups[j]);
                }
            }
        }
    }

    show(group) {
        group.visible = true;
    }

    isButtonVisible(group) {
        return !group.visible;
    }

    isGroupVisible(group) {
        return !!group.visible;
    }

    back() {
        this.$location.url('/stack');
    }
}

export default SpeechHelpersController;