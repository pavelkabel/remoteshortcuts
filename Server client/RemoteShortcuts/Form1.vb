Imports System.ComponentModel

Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles Me.Load
        Process1.Start()
    End Sub

    Public Shared a As Integer = 0
    Private Sub checkNodeServerRunning()
        For Each clsProcess As Process In Process.GetProcesses()
            If clsProcess.ProcessName.StartsWith("node") Then
                a += 1
            End If
        Next
        If (a >= 1) Then
            Timer1.Interval = 1000
            a = 0
            If (a > 5) Then
                Process1.Kill()
            End If
        Else
            Process1.Start()
            Timer1.Interval = 2000
        End If
    End Sub
    Private Sub Timer1_Tick(sender As Object, e As EventArgs) Handles Timer1.Tick
        checkNodeServerRunning()
    End Sub

    Public Sub Killer(processName As String)
        Dim psi As ProcessStartInfo = New ProcessStartInfo
        psi.Arguments = "/im " & processName & " /f"
        psi.FileName = "taskkill"
        Dim p As Process = New Process()
        p.StartInfo = psi
        p.Start()
    End Sub

    Private Sub Form1_FormClosing(ByVal sender As Object, ByVal e As System.Windows.Forms.FormClosingEventArgs) Handles Me.FormClosing
        If MessageBox.Show("are u sure to close this application?", "Close", MessageBoxButtons.YesNo, MessageBoxIcon.Question) = Windows.Forms.DialogResult.Yes Then
            Killer("node.exe")
        Else
            e.Cancel = True
        End If
    End Sub

End Class