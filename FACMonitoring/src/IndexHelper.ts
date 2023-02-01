
enum ActiveStatusPane
{
    ApplicationStatus,
    DatabaseStatus,
    DriveSpaceStatus,
    NightlyProcessStatus,
    ApplicationErrorStatus
}

class IndexHelper {
    public watch(){
        this.hideAllStatusPanes();
        this.showStatusPane(ActiveStatusPane.ApplicationErrorStatus);
        this.wireEvents();
    }

    private wireEvents(){

    }

    private hideAllStatusPanes(){

        document.getElementById("dvApplicationStatus").hidden = true;
        document.getElementById("dvDatabaseStatus").hidden = true;
        document.getElementById("dvDriveSpaceStatus").hidden = true;
        document.getElementById("dvNightlyProcessStatus").hidden = true;
        document.getElementById("dvApplicationErrorStatus").hidden = true;

    }

    private showStatusPane(activePane: ActiveStatusPane){

        switch (activePane)
        {
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
}