import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Camera,
  Save,
  Eye,
  EyeOff,
  Code2,
  ArrowLeft,
  Check,
  X,
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false,
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showOnlineStatus: true,
    allowDirectMessages: true,
  });
  const [appearance, setAppearance] = useState({
    theme: "light",
    language: "en",
    timezone: "America/New_York",
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "account", label: "Account", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.history.back()}
                  className="mr-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                  <p className="text-gray-600">
                    Manage your account and preferences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                          activeTab === tab.id
                            ? "bg-indigo-50 text-indigo-600 border border-indigo-200"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                {/* Profile Settings */}
                {activeTab === "profile" && (
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Profile Settings
                    </h2>

                    {/* Profile Picture */}
                    <div className="flex items-center mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          A
                        </div>
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 hover:bg-gray-50">
                          <Camera className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="ml-6">
                        <h3 className="font-medium text-gray-900">
                          Profile Picture
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Upload a new avatar
                        </p>
                        <Button size="sm" variant="outline">
                          Change Photo
                        </Button>
                      </div>
                    </div>

                    {/* Profile Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Alex"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Johnson"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="alex.johnson@email.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          defaultValue="Aspiring full-stack developer passionate about learning new technologies and solving complex problems."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </div>
                )}

                {/* Notifications Settings */}
                {activeTab === "notifications" && (
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Notification Preferences
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Receive notifications via email
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifications((prev) => ({
                              ...prev,
                              email: !prev.email,
                            }))
                          }
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.email
                              ? "bg-indigo-600"
                              : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.email
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Push Notifications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Receive push notifications in browser
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifications((prev) => ({
                              ...prev,
                              push: !prev.push,
                            }))
                          }
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.push ? "bg-indigo-600" : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.push
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            SMS Notifications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Receive notifications via SMS
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifications((prev) => ({
                              ...prev,
                              sms: !prev.sms,
                            }))
                          }
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.sms ? "bg-indigo-600" : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.sms
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Marketing Emails
                          </h3>
                          <p className="text-sm text-gray-600">
                            Receive updates about new features and tips
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifications((prev) => ({
                              ...prev,
                              marketing: !prev.marketing,
                            }))
                          }
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.marketing
                              ? "bg-indigo-600"
                              : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.marketing
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <Save className="w-4 h-4 mr-2" />
                        Save Preferences
                      </Button>
                    </div>
                  </div>
                )}

                {/* Privacy Settings */}
                {activeTab === "privacy" && (
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Privacy Settings
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">
                          Profile Visibility
                        </h3>
                        <div className="space-y-2">
                          {["public", "private", "friends-only"].map(
                            (option) => (
                              <label key={option} className="flex items-center">
                                <input
                                  type="radio"
                                  name="profileVisibility"
                                  value={option}
                                  checked={privacy.profileVisibility === option}
                                  onChange={(e) =>
                                    setPrivacy((prev) => ({
                                      ...prev,
                                      profileVisibility: e.target.value,
                                    }))
                                  }
                                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-700 capitalize">
                                  {option.replace("-", " ")}
                                </span>
                              </label>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Show Online Status
                          </h3>
                          <p className="text-sm text-gray-600">
                            Let others see when you're online
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setPrivacy((prev) => ({
                              ...prev,
                              showOnlineStatus: !prev.showOnlineStatus,
                            }))
                          }
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacy.showOnlineStatus
                              ? "bg-indigo-600"
                              : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacy.showOnlineStatus
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Allow Direct Messages
                          </h3>
                          <p className="text-sm text-gray-600">
                            Let teachers and students message you directly
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setPrivacy((prev) => ({
                              ...prev,
                              allowDirectMessages: !prev.allowDirectMessages,
                            }))
                          }
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacy.allowDirectMessages
                              ? "bg-indigo-600"
                              : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacy.allowDirectMessages
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <Save className="w-4 h-4 mr-2" />
                        Save Settings
                      </Button>
                    </div>
                  </div>
                )}

                {/* Appearance Settings */}
                {activeTab === "appearance" && (
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Appearance Settings
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">
                          Theme
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {["light", "dark", "system"].map((theme) => (
                            <button
                              key={theme}
                              onClick={() =>
                                setAppearance((prev) => ({
                                  ...prev,
                                  theme,
                                }))
                              }
                              className={`p-4 border-2 rounded-lg transition-all ${
                                appearance.theme === theme
                                  ? "border-indigo-500 bg-indigo-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <div className="text-center">
                                <div
                                  className={`w-12 h-8 mx-auto mb-2 rounded ${
                                    theme === "light"
                                      ? "bg-white border"
                                      : theme === "dark"
                                        ? "bg-gray-900"
                                        : "bg-gradient-to-r from-white to-gray-900"
                                  }`}
                                />
                                <span className="text-sm font-medium capitalize">
                                  {theme}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Language
                        </label>
                        <select
                          value={appearance.language}
                          onChange={(e) =>
                            setAppearance((prev) => ({
                              ...prev,
                              language: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timezone
                        </label>
                        <select
                          value={appearance.timezone}
                          onChange={(e) =>
                            setAppearance((prev) => ({
                              ...prev,
                              timezone: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="America/New_York">
                            Eastern Time (ET)
                          </option>
                          <option value="America/Chicago">
                            Central Time (CT)
                          </option>
                          <option value="America/Denver">
                            Mountain Time (MT)
                          </option>
                          <option value="America/Los_Angeles">
                            Pacific Time (PT)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <Save className="w-4 h-4 mr-2" />
                        Save Settings
                      </Button>
                    </div>
                  </div>
                )}

                {/* Account Settings */}
                {activeTab === "account" && (
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Account Settings
                    </h2>

                    <div className="space-y-8">
                      {/* Change Password */}
                      <div>
                        <h3 className="font-medium text-gray-900 mb-4">
                          Change Password
                        </h3>
                        <div className="space-y-4 max-w-md">
                          <input
                            type="password"
                            placeholder="Current password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                          <input
                            type="password"
                            placeholder="New password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                          <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                          <Button className="bg-indigo-600 hover:bg-indigo-700">
                            Update Password
                          </Button>
                        </div>
                      </div>

                      {/* Danger Zone */}
                      <div className="border-t border-gray-200 pt-8">
                        <h3 className="font-medium text-red-600 mb-4">
                          Danger Zone
                        </h3>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-red-900">
                                Delete Account
                              </h4>
                              <p className="text-sm text-red-700 mt-1">
                                This action cannot be undone. All your data will
                                be permanently deleted.
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              className="border-red-300 text-red-700 hover:bg-red-50"
                            >
                              Delete Account
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
