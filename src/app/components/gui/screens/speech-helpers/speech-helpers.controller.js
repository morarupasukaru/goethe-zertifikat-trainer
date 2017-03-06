class SpeechHelpersController {
    /*@ngInject*/
    constructor($location, $anchorScroll, $stateParams, levels, data) {
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
        this.print = !!$stateParams.print;
        this.levelsConstants = levels;
        this.data = data;
        this.initData();

        if (!!this.print) {
            window.print();
        }
    }

    scrollTo(id) {
        this.$anchorScroll(this.$location.hash(id));
    }

    toogleSelection(topGroup) {
        topGroup.selected = !topGroup.selected;
    }

    initData() {
        this.levels = [];
        for (let i = 0; i < this.levelsConstants.length; i++) {
            this.levels.push({ value: this.levelsConstants[i], selected: true });
        }

        for (let i = 0; i < this.data.length; i++) {
            this.countLevelEntriesInGroup(this.levelsConstants, this.data[i]);
        }


        for (let i = 0; i < this.data.length; i++) {
            let topGroup = this.data[i];
            let newEntries = [];
            this.flatinizeSubGroups(topGroup.entries, newEntries);
            topGroup.entries = newEntries;
        }
    }

    flatinizeSubGroups(entries, newEntries) {
        if (!!entries && entries.length > 0) {
            for (let i = 0; i < entries.length; i++) {
                let entry = entries[i];
                if (!!entry.groupId) {
                    newEntries.push(entry);
                    this.flatinizeSubGroups(entry.entries, newEntries);
                }
            }
        }
        return newEntries;
    }

    countLevelEntriesInGroup(levels, group) {
        let groupLevels = [];
        for (let i = 0; i < levels.length; i++) {
            groupLevels[levels[i]] = 0;
        }
        group.levels = groupLevels;

        if (!!group && !!group.entries && group.entries.length > 0) {
            for (let i = 0; i < group.entries.length; i++) {
                let entry = group.entries[i];
                if (!!entry.groupId) {
                    let entryLevels = this.countLevelEntriesInGroup(levels, entry);
                    let keys = Object.keys(entryLevels);
                    for (let j = 0; j < keys.length; j++) {
                        let key = keys[j];
                        groupLevels[key] = groupLevels[key] + entryLevels[key];
                    }
                } else {
                    let entryLevel = entry.level;
                    groupLevels[entryLevel] = groupLevels[entryLevel] + 1;
                }
            }
        }
        return groupLevels;
    }

    isEntryVisible(entry) {
        for (let i = 0; i < this.levels.length; i++) {
            if (this.levels[i].value === entry.level) {
                return this.levels[i].selected;
            }
        }
        return false;
    }

    isGroupVisible(group) {
        for (let i = 0; i < this.levels.length; i++) {
            if (!!this.levels[i].selected && group.levels[this.levels[i].value] > 0) {
                return true;
            }
        }
        return false;
    }

    title(entry) {
        if (!!entry.translate && Array.isArray(entry.translate)) {
            return entry.translate.join();
        } else {
            return entry.translate;
        }
    }

    back() {
        this.$location.url('/stack');
    }
}

export default SpeechHelpersController;