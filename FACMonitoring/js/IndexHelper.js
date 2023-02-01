var ActiveStatusPane;
(function (ActiveStatusPane) {
    ActiveStatusPane[ActiveStatusPane["ApplicationStatus"] = 0] = "ApplicationStatus";
    ActiveStatusPane[ActiveStatusPane["DatabaseStatus"] = 1] = "DatabaseStatus";
    ActiveStatusPane[ActiveStatusPane["DriveSpaceStatus"] = 2] = "DriveSpaceStatus";
    ActiveStatusPane[ActiveStatusPane["NightlyProcessStatus"] = 3] = "NightlyProcessStatus";
    ActiveStatusPane[ActiveStatusPane["ApplicationErrorStatus"] = 4] = "ApplicationErrorStatus";
})(ActiveStatusPane || (ActiveStatusPane = {}));
class IndexHelper {
    watch() {
        this.hideAllStatusPanes();
        this.showStatusPane(ActiveStatusPane.ApplicationErrorStatus);
        this.wireEvents();
    }
    wireEvents() {
    }
    hideAllStatusPanes() {
        document.getElementById("dvApplicationStatus").hidden = true;
        document.getElementById("dvDatabaseStatus").hidden = true;
        document.getElementById("dvDriveSpaceStatus").hidden = true;
        document.getElementById("dvNightlyProcessStatus").hidden = true;
        document.getElementById("dvApplicationErrorStatus").hidden = true;
    }
    showStatusPane(activePane) {
        switch (activePane) {
            case ActiveStatusPane.ApplicationErrorStatus:
                document.getElementById("dvApplicationErrorStatus").hidden = false;
                break;
            case ActiveStatusPane.DatabaseStatus:
                document.getElementById("dvDatabaseStatus").hidden = false;
                break;
            case ActiveStatusPane.DriveSpaceStatus:
                document.getElementById("dvDriveSpaceStatus").hidden = false;
                break;
            case ActiveStatusPane.ApplicationStatus:
                document.getElementById("dvApplicationStatus").hidden = false;
                break;
            case ActiveStatusPane.NightlyProcessStatus:
                document.getElementById("dvNightlyProcessStatus").hidden = false;
                break;
        }
    }
}
window.onload = () => {
    let helper = new IndexHelper();
    helper.watch();
};
