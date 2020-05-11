import System.Windows.Forms

var messageBox = MessageBox.Show(
  'Yo messagebox is here!',
  'A messagebox by JScript!',
  MessageBoxButtons.OK,
  MessageBoxIcon.Information
)

if (messageBox === DialogResult.OK) {
  print('Yeah you know that.')
}
